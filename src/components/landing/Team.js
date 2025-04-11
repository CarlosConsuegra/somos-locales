import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/tokens.js';

const TeamContainer = styled.section`
  padding: 60px 24px;
  background-color: ${colors.primary};
  color: #262623;
`;

const TeamContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const TeamInfo = styled.div`
  flex: 1;
  max-width: 400px;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const LearnMoreButton = styled.button`
  background: none;
  border: 2px solid #262623;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const TeamMembers = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
`;

const MemberName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const MemberRole = styled.p`
  font-size: 14px;
  color: #555;
`;

const Team = () => {
  const teamMembers = [
    {
      name: "Karla H. Váldez",
      role: "CEO & Fundadora",
      image: "/assets/image-lummi-avatar.png"
    },
    {
      name: "Ana Paulina Sosa",
      role: "CTO & Fundadora",
      image: "/assets/image-lummi-avatar-2.png"
    }
  ];

  return (
    <TeamContainer>
      <TeamContent>
        <TeamInfo>
          <Title>El Corazón del Fútbol</Title>
          <Subtitle>La esencia de las gradas en tu hogar.</Subtitle>
          <LearnMoreButton>Conócenos +</LearnMoreButton>
        </TeamInfo>
        
        <TeamMembers>
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <MemberImage src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </TeamMember>
          ))}
        </TeamMembers>
      </TeamContent>
    </TeamContainer>
  );
};

export default Team;
