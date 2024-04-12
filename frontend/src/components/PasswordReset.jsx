import '../App.css'
import {React, useState} from 'react'
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import {useParams } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'
import MyMessage from './Message'

const PasswordReset = () =>{
    const navigate = useNavigate()
    const {handleSubmit, control} = useForm()
    const {token} = useParams()
    console.log(token)
    const [ShowMessage, setShowMessage] = useState(false)


    const submission = (data) => {
        AxiosInstance.post(`api/password_reset/confirm/`,{
            password: data.password, 
            token: token,
        })

        .then((response) => {
            setShowMessage(true)
            setTimeout(() =>{
                navigate('/')
            }, 6000 )
        })
      
    }
    return(
        <div className={"myBackground"}> 

        {ShowMessage ? <MyMessage text={"Your password reset was successfull, you will be directed to the login page in a second"} color={'#69C9AB'}/> : null}
        <form onSubmit={handleSubmit(submission)}>

        

        <Box className={"whiteBox"}>

            <Box className={"itemBox"}>
                <Box className={"title"}> Reset password </Box>
            </Box>

            <Box className={"itemBox"}>
                <MyPassField
                        label={"Password"}
                        name ={"password"}
                        control={control}
                        />
            </Box>

            <Box className={"itemBox"}>
                <MyPassField
                        label={"Confirm password"}
                        name ={"password2"}
                        control={control}
                        />
            </Box>

            <Box className={"itemBox"}>
                <MyButton 
                    label={"Reset password"}
                    type={"submit"}
                />
            </Box>

            <Box className={"itemBox"} sx={{flexDirection:'column'}}>
             
            </Box>


        </Box>

    </form>
        
    </div>
    )

}

export default PasswordReset