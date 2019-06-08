Blockchain-based IoT Security Service
========

`Blockchain based IoT Security Service(BISS)` by LAB-C made in 2018 Jeju Blockchain Hackathon.

LAB-C팀이 2018 제주블록체인해커톤에서 만든 `Blockchain-based IoT Security Service(BISS)`입니다.

--------

## Background

요즘 신축된 아파트는 기본적으로 “스마트 홈”이라는 이름을 가진 다양한 IoT 장치들을 설치하고 있습니다. 그런데 과연, 스마트 홈 IoT는 안전할까요?

요즘 매일같이 홈 IoT나 CCTV등 다양한 IoT 기기들의 취약점이 발표됩니다. 유명한 사례로써는 미라이라는 이름의 IoT 장치의 취약점을 이용하여, DDos 공격을 진행한 미라이 봇넷 사건도 있습니다.

그렇듯 IoT 환경의 보안은 날로 갈수록 중요해지고 있지만, 하지만 다양한 IoT 서비스들의 보안은 참담한 수준입니다.

그래서 저희는 블록체인을 통한 데이터 검증을 진행해서 IoT 펌웨어 검증 솔루션 에서의 펌웨어 관리도 블록체인을 통해 검증하고, IoT 장치가 각각의 노드가되어, 모든 데이터가 암호화되어 블록체인(클레이튼 네트워크) 상에 올라가는 형태의 IoT 보안 솔루션을 기획하게 되었습니다.

## Goal

1. IoT 기기와 사용자간의 통신보안성 확립

2. IoT 펌웨어 검증 솔루션 개발

3. 블록체인을 통해 서버와 디바이스 간의 통신에서 데이터 무결성을 검증할 수 있는 IoT 통합 보안 솔루션을 개발

> 데이터 통신과 펌웨어 업데이트 통신에서 무결성, 보안성 ⬆️

## Directional

- 블록체인: `Klaytn`
- 웹 프론트엔드: `React.js`
- 웹 백엔드: `Express.js`
- 펌웨어 업로드 서버: `Flask`
- IoT 기기: 아두이노 + 라즈베리파이(`Python3`)