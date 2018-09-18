// import types
import {IQuestion, IQuestionAnswer, IQuestionDimension, IQuestionSubDimension} from "./types";
import Axios from "axios";

// prepare function
async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

// load questions
const questions: IQuestionDimension[] = require('./AIMA_SOAL.json');

const API_ENDPOINT = "http://localhost/api/";

const start = async () => {
    await asyncForEach(questions, async (dimensionS: IQuestionDimension) => {
        const dimension = dimensionS.dimension;
        try {
            await Axios.get(`${API_ENDPOINT}questions/add/dimension/`,{
                params: {
                    dimension,
                    name: dimensionS.name,
                },
            });
            console.log("OK");
        } catch (e) {
            console.log('requesting: {');
            console.log('dimension:', dimension);
            console.log('}');
            console.error(e.response.data);
        } finally {
            await asyncForEach(dimensionS.subdimensions, async (SubDimension: IQuestionSubDimension) => {
                const subdimension = SubDimension.subdimension;
                try {
                    await Axios.get(`${API_ENDPOINT}questions/add/dimension/sub/`,{
                        params: {
                            dimension,
                            subdimension,
                            name: SubDimension.name,
                        },
                    });
                } catch (e) {
                    console.log('requesting: {');
                    console.log('subdimension:', subdimension);
                    console.log('}');
                    console.error(e.response.data);
                } finally {
                    await asyncForEach(SubDimension.questions,async (question: IQuestion) => {
                        let params = {
                            dimension,
                            subdimension,
                            number: question.number,
                            question: question.question,
                            answers: [],
                        };

                        await asyncForEach(question.answers, async (answer: IQuestionAnswer) => {
                            params.answers.push(JSON.stringify(answer));
                        });

                        try {
                            await Axios.get(`${API_ENDPOINT}questions/add/`,{params});
                        } catch (e) {
                            console.error(e.response.data);
                        }
                    })
                }
            })
        }
    });
};

start();