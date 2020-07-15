import React from "react";
import styled from "styled-components";
import Image from "~/Parts/Image"
import profile from "~/data/profile"


type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <div className="profile_title">
        <h3>PROFILE</h3>
      </div>

      <div className="profile_content">
        <div className="profile_left">

          <div className="profile_image">
            <Image filename={profile.image} height={"20rem"} width={"20rem"} style={{ borderRadius: "50%" }} />
          </div>
          <div className="name">Kajiwara Kensei</div>
          <div className="info">
            <div className="title">Address</div>
            <div className="value">kd1270632</div>

          </div>
          <div className="info">
            <div className="title">Phone</div>
            <div className="value">09028070449</div>
          </div>
          <div className="info">

            <div className="title">Email</div>
            <div className="value">kd1270632@st.kobedenshi.ac.jp</div>
          </div>

        </div>
        <div className="profile_right">
          <div className="content">
            <div className="title">Self-introduction</div>
            <div className="value">
              My hobby is to buy reference books. I have purchased over 30 books
              so far.
            </div>
          </div>

          <div className="introduction">
            <div className="title">Academic background</div>
            <div className="content">
              <div>
                <div className="year">2011</div>
                <div className="event">Entered Kobe Electronics College.</div>
              </div>
              <div>
                <div className="year">2020</div>
                <div className="event">Graduated from Kobe Electronics College</div>
              </div>
              <div>
                <div className="year">2021 ~ 2022</div>
                <div className="event">Joined Kobe Electronics College</div>
              </div>
            </div>
          </div>
          <div className="career">
            <div className="title">Career</div>
            <div className="content">
              <div>
                <div className="year">2020</div>
                <div className="event">Graduated from Kobe Electronics College</div>
              </div>
              <div>
                <div className="year">2022</div>
                <div className="event">Graduated from Kobe Electronics College</div>
              </div>
              <div>
                <div className="year">2025 ~ </div>
                <div className="event">Graduated from Kobe Electronics College</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Component)`
  
  .profile_content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .profile_title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 2rem;
  }
  .profile_left,
  .profile_right {
    width: 100%;
    max-width: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .profile_left {
    align-items: center;
    & .info {
      text-align: center;
      & > .title {
        padding-bottom: 2rem;
        font-size: 1.5rem;
        font-weight: bold;
      }
      & > .value {
        color: #777;
        font-size: 1.2rem;
      }
    }
    &  .image {
      width: 15rem;
      height: 15rem;
      overflow: hidden;
      border-radius: 50%50%;
      border: 1px solid;
      
    }
    &  .name {
      font-weight: bold;
      font-size: 2rem;
    }
  }
  .profile_right {
    & > .content {
      & > .title {
        font-size: 2rem;
        font-weight: bold;
      }
      & > .value {
        font-family: 'Cardo', serif;
        font-size: .9rem;
        font-style: italic;
      }
    }

    & > .introduction, & > .career {
      & > .title {
        font-size: 2rem;
        font-weight: bold;
      }
      & .content{
        & > div{
          & > .year{
            font-size: 1.2rem;
            font-weight: bold;
          }
          & > .event{
            font-family: 'Cardo', serif;
            font-size: .9rem;
            font-style: italic;
          }
        }
      }
    }

  }
`;
