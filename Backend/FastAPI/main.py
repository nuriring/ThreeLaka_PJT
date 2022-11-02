from fastapi import FastAPI, File, UploadFile, Form
from youtube_transcript_api import YouTubeTranscriptApi
from fastapi.middleware.cors import CORSMiddleware
from nltk.stem import WordNetLemmatizer
import requests
import json
from properties import spell_checker_key, oxford_appId, oxford_key, speechace_url

from models import EssayChecker
import re
import nltk
nltk.download('wordnet')
nltk.download('omw-1.4')

lemmatizer = WordNetLemmatizer()


origins = ["*"]


app = FastAPI() 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/v2/video/script/{video_id}") 
async def preprocess(video_id): 
    script = YouTubeTranscriptApi.get_transcript(video_id)

    tmp = ""
    preprocessed_script=[]
    for line in script:
        if not tmp:
            start = line['start']
            duration = line['duration']
        no_whitespace_line = line['text'].replace("\n", " ")
        tmp += no_whitespace_line
        duration += line['duration']
        if "." in no_whitespace_line or "?" in no_whitespace_line or "!" in no_whitespace_line:
            preprocessed_script.append({'text':tmp, "start":round(start, 3), "duration":round(duration, 3)})
            tmp = ""

    return preprocessed_script


@app.post("/api/v2/study/writing/wordcheck") 
async def checkWords(essay_checker: EssayChecker): 
    essay = essay_checker.essay
    essay = essay.replace(',', ' ')
    lines = list(map(lambda x: x.strip(), re.split('[.?!\n]',essay)))
    words = list(map(lambda x: lemmatizer.lemmatize(x, 'v'), essay_checker.word_list))
    result = []
    
    for line in lines:
        line2 = line.replace(',', ' ,')
        line3 = list(map(lambda x: lemmatizer.lemmatize(x, 'v'), line2.split()))
        print(line3)
        for word in words:    
            if word in line3:
                result.append((word, line))
    
    return result
    
@app.post("/api/v2/study/writing/spellcheck") 
async def spellcheck(text):
    api_key = spell_checker_key
    endpoint = "https://api.bing.microsoft.com/v7.0/SpellCheck"
    data = {'text': text}
    params = {
        'mkt':'en-us',
        'mode':'proof'
    }
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Ocp-Apim-Subscription-Key': api_key,
    }
    response = requests.post(endpoint, headers=headers, params=params, data=data)
    return response.json()

@app.post("/api/v2/study/dictionary") 
async def oxford(word):
    headers = {
        "app_id": oxford_appId,
        "app_key": oxford_key
    }
    language = "en-us"
    url = "https://od-api.oxforddictionaries.com:443/api/v2/entries/" + language + "/" + word.lower()
    response = requests.get(url, headers=headers).json()

    senses = response["results"][0]["lexicalEntries"][0]['entries'][0]['senses'][0]
    wordDefinition = senses['definitions'][0]
    wordExample = ''
    try:
        wordExample = senses['examples'][0]['text']
    except:
        wordExample = 'example does not exist'
    lexicalCategory = response['results'][0]['lexicalEntries'][0]['lexicalCategory']['text']
    response = {
        "wordId": word,
        "wordDefinition": wordDefinition,
        "wordExample": wordExample,
        "lexicalCategory": lexicalCategory,
    }

    return response
    

@app.post("/api/v2/study/speechace") 
async def speechace(text, file: bytes = File()):
    data= {
        "text": text,
        "question_info": 'u1/q1',
        "no_mc": 1
    }
    files = {
        "user_audio_file" : file
    }
    session = requests.Session()
    r = session.post(speechace_url, data=data, files=files).json()
    text = r["text_score"]["text"]
    total_score = r["text_score"]["quality_score"]
    scores = []

    for word_score in r["text_score"]["word_score_list"]:
        tmp = {
            "word" :word_score["word"],
            "score" :word_score["quality_score"]
        }
        scores.append(tmp)

    response = {
        "text": text,
        "total_score": total_score,
        "scores": scores
    }

    return response
