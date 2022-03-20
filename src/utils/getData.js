
//封装getData

import request from '@/utils/request'

const AudioUploadUrl = '/answer/insert/file'
export function audioUpload(obj){
    let data = new FormData();
    data.append('uploadFile', obj, 'audio.wav');
    return request.post(AudioUploadUrl, data, {
        headers: {
            'Content-Type' : 'multipart/form-data'
        }
    });
}

const getQuestionUrl = '/question/query/'
export function getQuestion(qid){
    return request.get(getQuestionUrl + qid);
}

const submitAnswerUrl = '/answer/insert'
export function submitAnswer(payload){
    return request.put(submitAnswerUrl, payload);
}

const getNextQuestionUrl = '/answer/query/next/'
export function getNextQuestion(payload, fileIndex){
    return request.post(getNextQuestionUrl + fileIndex, payload);
}

const ansCountUrl = '/answer/query/count/'
//用await
export async function getCount(userId) {
    return await request.get(ansCountUrl + userId)
    // return await requestGet(ansCountUrl + userId)
}

const startQuizUrl = '/answerTime/start/'
export function startQuiz(userId){
    return request.post(startQuizUrl + userId);
}

const ansDateUrl = '/answerTime/query/all/'
export async function getDate(userId) {
    return await request.get(ansDateUrl + userId);
    // return await request.get("http://localhost:8081/api/answerTime/query/all/" + userId);
}

const adviceUrl = '/finance/advice/'
export async function getAdvice(userid, times) {
    return await request.get(adviceUrl + userid + '/' + times);
    // return await request.get("http://localhost:8081/api/answerTime/query/all/" + userId);
}

const allAdviceUrl = '/finance/advice/all/'
export async function getAllAdvice(userid) {
    return await request.get(allAdviceUrl + userid);
    // return await request.get("http://localhost:8081/api/answerTime/query/all/" + userId);
}


