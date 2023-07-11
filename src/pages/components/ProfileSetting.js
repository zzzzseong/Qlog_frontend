import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import Explore from './Explore';

const ProfileSetting = (props) => {
    const handleBack = (e) => {
        const right = ReactDOM.createRoot(document.getElementsByClassName('home-right')[0]);
        right.render(React.createElement(Explore, props, null));  
    };
    const handleDeleteImg = (e) => {
        if(window.confirm('프로필 이미지를 삭제하시겠습니까?')) {
            axios.delete("/user/image/remove")
            .then(response => {
                if(response.data == 'ok') alert('이미지가 삭제되었습니다.');
                else alert(response.data);

                window.location.href = '/home';
            })
            .catch(error => {
                console.log(error);
            });
        }

    };

    const [formData, setFormData] = useState({
        username: props.name,
        introduction: props.introduction
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        const button = document.getElementsByClassName('profileSetting-footer')[0].children[0];
        if(button.disabled) button.disabled = false;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(window.confirm('프로필을 수정하시겠습니까?')) {
            const form = new FormData();
            form.append('username', formData.username);
            form.append('introduction', formData.introduction);
    
            axios.put('/user/update', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                //empty response
                window.location.href = '/home';
            })
            .catch(error => {
                console.log(error);
            });
        }
    };

    const imgRef = useRef();

    const handleUpdateImg = () => {
        const form = new FormData();
        form.append('image', imgRef.current.files[0]);

        axios.post('/user/image/upload', form, {
            headers: { 
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            //empty response
            window.location.href = '/home';
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="profileSetting">
            
            <div className="profileSetting-header">
                <h1 className="profileSetting-header-back" onClick={handleBack}>←</h1>
                <h1 className="profileSetting-header-title">Profile Setting</h1>
            </div>

            <div className="profileSetting-body">
                <div className='profileSetting-body-top'>
                    <img onClick={handleUpdateImg} src={props.imgPath}></img><br/>
                    <label className='profileSetting-body-top-label' htmlFor='profileImg'>프로필 이미지 변경</label>
                    <input className="profileSetting-body-top-input" type='file' id="profileImg"  onChange={handleUpdateImg} ref={imgRef}></input>
                    <label className='profileSetting-body-top-label' onClick={handleDeleteImg}>프로필 이미지 삭제</label>
                </div>
                <div className='profileSetting-body-bottom'>
                    <h2>username</h2>
                    <div className='bottom-username'>
                        <input type='text' defaultValue={props.name} name='username' onChange={handleChange}></input>
                    </div>
                    <h2>introduction</h2>
                    <div className='bottom-introduction'>
                        <textarea defaultValue={props.introduction} name='introduction' onChange={handleChange}></textarea>
                    </div>
                </div>
            </div>
            
            <div className="profileSetting-footer">
                <button disabled onClick={handleSubmit}>submit</button>
            </div>
        </div>
    );
};

export default ProfileSetting;