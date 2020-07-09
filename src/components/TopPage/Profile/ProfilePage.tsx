import React from "react";
import styled from "styled-components";

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

          <div className="image"></div>
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
  padding: 5rem 2rem;
  .profile_content {
    display: flex;
    justify-content: center;
  }
  .profile_title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 2rem;
    & h3 {
      padding: 1rem 3rem;
    }
  }
  .profile_left,
  .profile_right {
    width: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
  }
  .profile_left {
    align-items: center;
    & .info {
      padding: 1.5rem;
      text-align: center;
      & .title {
        font-size: 1.5rem;
        font-weight: bold;
        padding: 1rem .5rem;
      }
      &  .value {
        color: #777;
        font-size: 1.2rem;
      }
    }
    &  .image {
      width: 20rem;
      height: 20rem;
      border-radius: 50%50%;
      border: 1px solid;
    }
    &  .name {
      padding: 3rem 0;
      font-weight: bold;
      font-size: 2rem;
    }
  }
  .profile_right {
    & > .content {
      padding: 2rem;
      & > .title {
        font-size: 2rem;
        padding-bottom: 1rem;
        font-weight: bold;
      }
      & > .value {
        padding: 1rem;
        font-family: 'Cardo', serif;
    font-size: .9rem;
    font-style: italic;

      }
    }

    & > .introduction, & > .career {
      padding: 2rem;
      & > .title {
        font-size: 2rem;
        padding-bottom: .5rem;
        font-weight: bold;
      }
      & .content{
        & > div{
          padding: .5rem 1rem;
          & > .year{
            padding: .5rem 0;
            font-size: 1.2rem;
            font-weight: bold;
          }
          & > .event{
            padding-left: 1rem;
            font-family: 'Cardo', serif;
            font-size: .9rem;
            font-style: italic;
          }
        }
      }
    }

  }
`;
