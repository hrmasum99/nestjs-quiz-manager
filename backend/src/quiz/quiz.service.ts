import { Injectable } from "@nestjs/common";

@Injectable()
export class QuizService {
  getAllQuiz() {
    return [1,2,3,"1st","2nd","3rd"];
  }
}
