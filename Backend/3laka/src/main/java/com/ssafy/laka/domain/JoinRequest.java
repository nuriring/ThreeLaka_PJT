package com.ssafy.laka.domain;

import com.ssafy.laka.domain.enums.State;
import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Builder
@AllArgsConstructor
@Table(name = "join_request")
public class JoinRequest{
    @Id
    @GeneratedValue
    @Column(name = "request_Id")
    private int requestId;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_Id")
    private User sender;

    @ManyToOne(targetEntity = Guild.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "guild_Id")
    private Guild guild;

    private State state;

}
