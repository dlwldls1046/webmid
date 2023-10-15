import Image from 'next/image';

export default function Home() {
  return (
    <div className="scroll-container">
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="logo">Portfolio by Lee Jiin</div>
            <ul className="nav">
              <li>
                <a href="#section1">Home</a>
              </li>
              <li>
                <a href="#section2">About Me</a>
              </li>
              <li>
                <a href="#section3">Project</a>
              </li>
              <li>
                <a href="#section4">Team Project</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div id="section1" className="main">
        <h2>이지인</h2>
        <h2>LEE JI IN</h2>
        <h3>
          <p>- 중부대학교 정보보호학과 재학생</p>
          <p>- 인투에듀 교육기관 마케팅 팀 사원 </p>
        </h3>
        <div className="main_img">
          <img src="/img/unnamed.webp" alt="globals.css" />
        </div>
      </div>
      <div id="section2" className="about">
        <h2>Introduction</h2>
        <div className="about_img">
          <img src="jiin.jpg" alt="globals.css" />
        </div>
        <div className="about_info">
          <h1 className="name">이지인</h1>
          <h1 className="birthday">2003.12.22</h1>
          <h1 className="home">서울 은평구</h1>
          <h1 className="call">010-3403-4503</h1>
          <h1 className="email">dlwldls1046@naver.com</h1>
          <h1 className="major">중부대학교 정보보호학과</h1>
        </div>
      </div>
      <div id="section3" className="project">
        <h2>Project</h2>
        <div className="hcj">
          <img src="/img/hcj.png" alt="globals.css" />
          <p>
            <a href="https://github.com/dlwldls1046/dlwldls1046">GitHub 바로가기</a>
          </p>
          <p>
            <a href="https://hcj2-nine.vercel.app/">웹 서비스 주소</a>
          </p>
        </div>
        <div className="clerk">
          <img src="/img/clerk.png" alt="globals.css" />
          <p>
            <a href="https://github.com/dlwldls1046/dlwldls1046">GitHub 바로가기</a>
          </p>
          <p>
            <a href="https://clerk2-21wv.vercel.app/">웹 서비스 주소</a>
          </p>
        </div>
      </div>
      <div id="section4" className="teamproject">
        <h2>Team</h2>
        <div className="team1">
          <img src="/img/2815428.png" alt="globals.css" />
          <p>이름: 김시우</p>
          <p>학번: 92212776</p>
          <p>MBTI: INTJ</p>
          <p>파트분배: 로그인/회원가입</p>
        </div>
        <div className="team2">
          <img src="/img/2815428.png" alt="globals.css" />
          <p>이름: 송지현</p>
          <p>학번: 92212879</p>
          <p>MBTI: ESTJ</p>
          <p>파트분배: 홈메뉴</p>
        </div>
        <div className="team3">
          <img src="/img/2815428.png" alt="globals.css" />
          <p>이름: 윤다혜</p>
          <p>학번: 92212958</p>
          <p>MBTI: ISTP</p>
          <p>파트분배: 총괄</p>
        </div>
        <div className="team4">
          <img src="/img/2815428.png" alt="globals.css" />
          <p>이름: 홍준희</p>
          <p>학번: 92213158</p>
          <p>MBTI: INTJ</p>
          <p>파트분배: 부총괄</p>
        </div>
      </div>
      <div className="introduce">
        <h2>Introduce</h2>
        <div>
          <h3>
            <p className="large">웹 사이트 이름: 홍이김송윤</p>
            <p>
              선정 사유 : 스터디를 진행 중에 비공식과 공식을 따지지 않고 동아리
              가입 요청을 승인받는 사이트를 만들고자 시작함.
            </p>
            <p>
              동아리로 승인이 가능한 사이트를 만드는 목적
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
}