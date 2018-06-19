import Axios from 'axios';
import { questionsDispatcher } from "../reducers/questions";
import { answersDispatcher } from "../reducers/answers";
import { userDispatcher } from "../reducers/user";

const uri = 'http://localhost:8000/api';

export const getUser = async ({ dispatch, getState }, name, number) => {
    try {
        //TODO: reducers for user request loading
        // request user to server
        let res = await Axios({
            method: 'get',
            url: uri+'/users/',
            params: { name, number },
            config: { withCredentials: true }
        });
        // dispatch user to user store
        dispatch(userDispatcher.addUser( res.data.userID, name, number ));
        // get answered question in server
        dispatch(( dispatch, getState ) => getAnswer({ dispatch, getState }));
        //TODO: reducers for user request loading
    } catch (e) {
        //TODO: improve this
        console.error(e);
        alert('ERROR HAPPEN!');
    }
};

export const requestQuestions = async ({ dispatch }) => {
    try {
        //TODO: reducer for question request loading
        // get all question from server
        let res = await Axios({
            url: uri + '/questions/',
            config: { withCredentials: true }
        });
        // dispatch questions from server to questions store
        dispatch( questionsDispatcher.addDimensions(res.data) );
        //TODO: reducer for question request loading
    } catch (e) {
        // TODO: improve this
        console.error(e);
        alert('ERROR HAPPEN!');
    }
};

export const answer = ({ dispatch, getState }, ques_id, answer) => {
    // dispatch answered question to local store
    dispatch(answersDispatcher.addAnswer(ques_id, answer));
    // dispatch and request to answer question to server
    dispatch(( dispatch, getState ) => addAnswer({ dispatch, getState }, ques_id, answer));
};
export const addAnswer = async ({ dispatch, getState }, ques_id, answer) => {
    try {
        //TODO: reducer for answer question in server
        // get stored user id
        let userID = getState().user.user_id;
        // send answer request to server with user id
        await Axios({
            method: 'get',
            url: uri+'/answers/'+userID+'/add/',
            params: { quid: ques_id, answer },
            config: { withCredentials: true, }
        });
        // dispatch to request answered question from server
        dispatch((dispatch, getState) => getAnswer({ dispatch, getState }));
        //TODO: reducer for answer question in server
    } catch (e) {
        // TODO: improve this
        console.error(e);
        alert('ERROR HAPPEN!');
    }
};
export const getAnswer = async ({ dispatch, getState }) => {
    try {
        //TODO: reducer for get answered question in server
        // get stored user id
        let uuid = getState().user.user_id;
        // get all answered questions from server
        let res = await Axios({
            method: 'get',
            url: uri+'/answers/'+uuid+'/all/',
            config: { withCredentials: true },
        });
        // dispatch to store answered question to server answered store
        dispatch(answersDispatcher.srvAnswers(res.data));
        //TODO: reducer for get answered question in server
    } catch (e) {
        // TODO: improve this
        console.error(e);
        alert('ERROR HAPPEN!');
    }
};