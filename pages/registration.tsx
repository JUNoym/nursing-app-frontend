import React, { useState } from 'react'

import api from '../api/config'

const registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (event) => {
        let data = {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
        }
        api().post('/registrations', data,
            { withCredentials: true },
        ).then(res => {
        }).catch(e => {
        })
        event.preventDefault()
        window.location.reload()
    }

    return (
        <div>
            <h1>新規登録画面</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="確認用パスワード"
                    value={passwordConfirmation}
                    onChange={event => setPasswordConfirmation(event.target.value)}
                />

                <button type="submit">登録</button>
            </form>
        </div>
    )
}

export default registration
