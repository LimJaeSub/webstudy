import React from 'react'

function Login() {
  return (
    <div className=''>
        <div className='titleWrapper'>
           이메일과 비밀번호를
           <br/>
           입력하세요
        </div>
        <div className='contentWrap'>
          <div className='inputTitle'>이메일 주소</div>
          <div className='inputWrap'>
            <input className='input' />
          </div>
          <div className="errorMesageWrap">
            올바른 이메일을 입력 해주세요.
          </div>
          <div className='inputTitle'>비밀번호</div>
          <div className='inputWrap'>
            <input className='input' />
          </div>
          <div className="errorMesageWrap">
            영문,숫자,특수문자 포함 8자 이상을 입력해주세요
          </div>

          <div>
            <button>
              확인
            </button>
          </div>
        </div>
    </div>
  )
}

export default Login