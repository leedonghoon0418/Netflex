        
        // search 아이콘 클릭시 input text창 띄우기, 배경 클릭시 사라짐
        document.addEventListener('click', e =>{
            if(e.target.id == 'search' || e.target.id == 'search-box'){
                document.getElementById('search-box').style.display = 'inline';
            } else {
                document.getElementById('search-box').style.display = 'none';
            }
        });

        // 스크롤 이동시 백그라운드 컬러 변경
        window.addEventListener('scroll', ()=>{
            if(window.scrollY != 0){
                document.querySelector('#header-container-background').style.display = `block`;
            } else{
                document.querySelector('#header-container-background').style.display = `none`;
            }
          });



        // 알림아이콘 마우스 오버시 알림창 띄우기
        document.getElementById('bell').addEventListener('mouseover',(e)=>{
            document.getElementById('notification-pane').style.display = 'inline';
        });
        document.getElementById('virtualbox2').addEventListener('mouseover',(e)=>{
            document.getElementById('notification-pane').style.display = 'none';
        });
        document.getElementById('virtualbox3').addEventListener('mouseover',(e)=>{
            document.getElementById('notification-pane').style.display = 'none';
        });

        // 유저 아이콘 마우스 오버시 메뉴창 띄우기
        document.querySelector('.user-nav').addEventListener('mouseover',(e)=>{
            console.log('ok')
            document.querySelector('.user-elemList').style.display = 'inline';
        });
        document.querySelector('#virtualbox').addEventListener('mouseover',(e)=>{
            document.querySelector('.user-elemList').style.display = 'none';
        });
        document.querySelector('#virtualbox3').addEventListener('mouseover',(e)=>{
            document.querySelector('.user-elemList').style.display = 'none';
        });


        // mainVideo.pause();
        // replay버튼 클릭시 새로고침
        let mainVideo = document.getElementById('main-video');
        let onOff = true;
        document.querySelector('.replayBtn-icon').addEventListener('click',()=>{
            if(onOff){
                mainVideo.pause();
                onOff = false
            } else {
                mainVideo.play();
                onOff = true;
            }
        })
        
        
        
        // 상세정보 클릭시 info화면 띄우기
        document.querySelector('.infoBtn').addEventListener('click', ()=>{
            mute.innerHTML =  `<i class="fa-solid fa-volume-xmark"></i>`;

            // main 영상 autoplay속성 추가
            // muteOnOff.setAttribute('autoplay','');

            // info 영상 재생
            muteOnOff.play();

            // 상세정보 클릭시 기본 mute, main 영상 stop
            muteOnOff.volume = 0;
            mainVideo.pause();

            // ----------------수정----------------
            sound = false;
            // ----------------수정----------------
            
            document.getElementById('info-container').style.display = 'block';
        })
        document.querySelector('#info-close-btn').addEventListener('click', ()=>{
            document.getElementById('info-container').style.display = 'none';
            // info창 close버튼 클릭 시 사운드off, main 영상 start
            muteOnOff.volume = 0;
            mainVideo.play();
            muteOnOff.play();
        })

        let sound = false; // 사운드 아이콘 변경
        
        let mute = document.getElementById('mute-btn');
        let muteOnOff = document.getElementById('info-video');

        // sound 버튼 변경, 음소거 이벤트
        function soundOnOff(){
            if(sound == false){
                mute.innerHTML =  `<i class="fa-solid fa-volume-high"></i>`;
                muteOnOff.volume = 1;
                sound = true;
            } else{
                mute.innerHTML =  `<i class="fa-solid fa-volume-xmark"></i>`;
                muteOnOff.volume = 0;
                sound = false;
            }
        }
        
    
        