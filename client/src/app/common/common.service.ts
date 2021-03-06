import { ExamList, ExamedList } from './../exam-content/topic/list-view/list-view.model';
import { TopicList } from './../exam-content/card-topic/topic.model';
import { ExamContentModel } from '../exam-content/exam.content.model';
import { SignUp } from '../signup/signUp.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CommonService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  public add_subject = new Subject<String>();
  constructor(private http: Http) {

  }

  signUp(name: string, password: string, email: string, confirmPass: string): Promise<SignUp> {
    return this.http
      .post('/api/sign-up', JSON.stringify({ name: name, password: password, email: email }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as SignUp)
      .catch();
  }

  signIn(email: string, password: string): Promise<SignUp> {
    return this.http
      .post('/api/sign-in', JSON.stringify({ email: email, password: password }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as SignUp)
      .catch();

  }

  public userList: SignUp[];
  public examcontent: ExamContentModel;
  public topicList: TopicList;
  public examList: Array<ExamList>;
  public examedList: Array<ExamedList>;

  getAllUser() {
    return this.http.get('/api/get-all-user', {})
  }

  getTopicList() {
    this.topicList = {
      topics: [
        { name_topic: "Đọc đoạn hội thoại", count_exam: "100", count_examed:"20" },
        { name_topic: "Hỏi đáp", count_exam: "10", count_examed:"0" },
        { name_topic: "Bài nói chuyện", count_exam: "20", count_examed:"7" },
        { name_topic: "Câu không hoàn thành", count_exam: "100", count_examed:"40" },
        { name_topic: "Hoàn thành đoạn văn", count_exam: "10", count_examed:"5" },
        { name_topic: "Đọc hiểu", count_exam: "110", count_examed:"50" }
      ]
    }
    return this.topicList;
  }
  getExamedOfTopicList() {
    this.examedList = [
        { id:"exam1",name_exam: "Bài thi số 1", time: "180",num_questions:"30", point:"50"},
        { id:"exam2",name_exam: "Bài thi số 2", time: "180",num_questions:"30", point:"50"},
        { id:"exam3",name_exam: "Bài thi số 3", time: "180",num_questions:"30", point:"50"},
        { id:"exam4",name_exam: "Bài thi số 4", time: "180",num_questions:"30", point:"50"},
        { id:"exam5",name_exam: "Bài thi số 5", time: "180",num_questions:"30", point:"50"},
        { id:"exam6",name_exam: "Bài thi số 6", time: "180",num_questions:"30", point:"50"},
        { id:"exam7",name_exam: "Bài thi số 7", time: "180",num_questions:"30", point:"50"},
        { id:"exam8",name_exam: "Bài thi số 8", time: "180",num_questions:"30", point:"50"},
        { id:"exam9",name_exam: "Bài thi số 9", time: "180",num_questions:"30", point:"50"},
        { id:"exam10",name_exam: "Bài thi số 10", time: "180",num_questions:"30", point:"50"},
        { id:"exam11",name_exam: "Bài thi số 11", time: "180",num_questions:"30", point:"50"},
        { id:"exam12",name_exam: "Bài thi số 12", time: "180",num_questions:"30", point:"50"},
        { id:"exam13",name_exam: "Bài thi số 13", time: "180",num_questions:"30", point:"50"},
        { id:"exam14",name_exam: "Bài thi số 14", time: "180",num_questions:"30", point:"50"},
        { id:"exam15",name_exam: "Bài thi số 15", time: "180",num_questions:"30", point:"50"},
        { id:"exam16",name_exam: "Bài thi số 16", time: "180",num_questions:"30", point:"50"},
        { id:"exam17",name_exam: "Bài thi số 17", time: "180",num_questions:"30", point:"50"},
        { id:"exam18",name_exam: "Bài thi số 18", time: "180",num_questions:"30", point:"50"},
        { id:"exam19",name_exam: "Bài thi số 19", time: "180",num_questions:"30", point:"50"},
        { id:"exam20",name_exam: "Bài thi số 20", time: "180",num_questions:"30", point:"50"},
        { id:"exam21",name_exam: "Bài thi số 21", time: "180",num_questions:"30", point:"50"},
        { id:"exam22",name_exam: "Bài thi số 22", time: "180",num_questions:"30", point:"50"},
        { id:"exam23",name_exam: "Bài thi số 23", time: "180",num_questions:"30", point:"50"},
        { id:"exam24",name_exam: "Bài thi số 24", time: "180",num_questions:"30", point:"50"},
        { id:"exam25",name_exam: "Bài thi số 25", time: "180",num_questions:"30", point:"50"},
        { id:"exam26",name_exam: "Bài thi số 26", time: "180",num_questions:"30", point:"50"},
      ]
    return this.examedList;
  }

  getExamsOfTopicList() {
    this.examList = [
        { id:"exam1",name_exam: "Bài thi số 1", time: "180",num_questions:"30"},
        { id:"exam2",name_exam: "Bài thi số 2", time: "180",num_questions:"30"},
        { id:"exam3",name_exam: "Bài thi số 3", time: "180",num_questions:"30"},
        { id:"exam4",name_exam: "Bài thi số 4", time: "180",num_questions:"30"},
        { id:"exam5",name_exam: "Bài thi số 5", time: "180",num_questions:"30"},
        { id:"exam6",name_exam: "Bài thi số 6", time: "180",num_questions:"30"},
        { id:"exam7",name_exam: "Bài thi số 7", time: "180",num_questions:"30"},
        { id:"exam8",name_exam: "Bài thi số 8", time: "180",num_questions:"30"},
        { id:"exam9",name_exam: "Bài thi số 9", time: "180",num_questions:"30"},
        { id:"exam10",name_exam: "Bài thi số 10", time: "180",num_questions:"30"},
        { id:"exam11",name_exam: "Bài thi số 11", time: "180",num_questions:"30"},
        { id:"exam12",name_exam: "Bài thi số 12", time: "180",num_questions:"30"},
        { id:"exam13",name_exam: "Bài thi số 13", time: "180",num_questions:"30"},
        { id:"exam14",name_exam: "Bài thi số 14", time: "180",num_questions:"30"},
        { id:"exam15",name_exam: "Bài thi số 15", time: "180",num_questions:"30"},
        { id:"exam16",name_exam: "Bài thi số 16", time: "180",num_questions:"30"},
        { id:"exam17",name_exam: "Bài thi số 17", time: "180",num_questions:"30"},
        { id:"exam18",name_exam: "Bài thi số 18", time: "180",num_questions:"30"},
        { id:"exam19",name_exam: "Bài thi số 19", time: "180",num_questions:"30"},
        { id:"exam20",name_exam: "Bài thi số 20", time: "180",num_questions:"30"},
        { id:"exam21",name_exam: "Bài thi số 21", time: "180",num_questions:"30"},
        { id:"exam22",name_exam: "Bài thi số 22", time: "180",num_questions:"30"},
        { id:"exam23",name_exam: "Bài thi số 23", time: "180",num_questions:"30"},
        { id:"exam24",name_exam: "Bài thi số 24", time: "180",num_questions:"30"},
        { id:"exam25",name_exam: "Bài thi số 25", time: "180",num_questions:"30"},
        { id:"exam26",name_exam: "Bài thi số 26", time: "180",num_questions:"30"},
      ]
    return this.examList;
  }

  getExamContentResult() {
    this.examcontent = {
      id: "dasjdhasdksjkjbdsjk",
      time: 180,
      name: "SE-1",
      questions: [
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "1",
          choiceAnswer: [
            {
              opt: "A",
              content: "crowd",
              formtype: "String"
            },
            {
              opt: "B",
              content: "crowds",
              formtype: "String"
            },
            {
              opt: "C",
              content: "crowding",
              formtype: "String"
            },
            {
              opt: "D",
              content: "crowded",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "2",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "3",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "4",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "5",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "6",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "7",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "8",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "9",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "10",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "11",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "12",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "13",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        },
        {
          question: "Some visitors to Dubrovik feel that it is too ____ with tourists to be enjoyable during the summer",
          question_id: "14",
          choiceAnswer: [
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            },
            {
              opt: "B",
              content: "I am fine",
              formtype: "String"
            }
          ]
        }


      ]

    };
    return this.examcontent;
  }
}
