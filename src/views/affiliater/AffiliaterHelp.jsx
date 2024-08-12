import { React, useState, useEffect } from 'react'
import { Input, Button } from "antd";
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom'
import { useUserDetailsByIdQuery } from '../../features/api/adminApiSlice'

function AffiliaterHelp() {
    const {  loggedInUserId } = useAuth()
    const { TextArea } = Input;
    const params = useParams()
    const [userData, setUserData] = useState([])
    const { data, error, isLoading, refetch } = useUserDetailsByIdQuery({userId: loggedInUserId })
    useEffect(() => {
        refetch()
    }, [params])

    useEffect(() => {
        setUserData(data?.data)
    }, [data])

    

    const fields = {
        Feedback: '',
    }

    //input field onchange handler
    const [form, setForm] = useState(fields);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    //handlesubmit
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const payload = {
                Feedback: form.Feedback
            };
            let userId = logId;
            const result = await personaldetails({ userId, payload })
            if (result) {
                notification('success', 'Submitted', result?.data?.message, 'bottomRight');
                setForm(fields)
            }


        } catch (error) {
            notification('error', 'Submit Failed', error?.data?.message, 'bottomRight');
        }
    }
    return (
        <div className="affiliaterhelp">
            <div className='affiliaterhelp__container'>
                <h2>Help ?</h2>
                <div className="affiliaterhelp__details">
                    <p>Contact with Whatsapp</p>
                    <p>Contact with email at <a>{userData?.email}</a></p>
                    <p>Contact Our Executive</p>
                </div>
                <div className="affiliaterhelp__feedback">
                    <label>
                        Register complaints and feedback
                        <TextArea
                            placeholder='Complaints and feedback'
                            name='Feedback'
                            value={form.Feedback}
                            onChange={handleChange}
                            size='large'
                        />

                    </label>

                    <div className="affiliaterhelp__button">
                        <Button type='primary' success onClick={handleSubmit}>Submit</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AffiliaterHelp