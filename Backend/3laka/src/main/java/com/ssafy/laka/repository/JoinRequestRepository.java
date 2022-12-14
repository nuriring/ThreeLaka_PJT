package com.ssafy.laka.repository;

import com.ssafy.laka.domain.Guild;
import com.ssafy.laka.domain.JoinRequest;
import com.ssafy.laka.domain.User;
import com.ssafy.laka.domain.enums.State;
import com.ssafy.laka.dto.guild.JoinRequestDto;
import com.ssafy.laka.dto.user.UserResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface JoinRequestRepository extends JpaRepository<JoinRequest, Integer> {
//    해당 길드의 가입요청 조회하기

    Optional<JoinRequest> findByGuildAndSender(Guild guild, User sender);

    Optional<JoinRequest> findByGuildAndSenderAndState(Guild guild, User sender, State state);

    List<JoinRequestDto> findByGuildId(int guildId);

    Optional<JoinRequest> findBySender(User sender);

    List<JoinRequestDto> findByGuildIdAndState(int guildId, State state);

    List<JoinRequest> findAllBySenderAndState(User user, State state);
}
