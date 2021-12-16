
import {
//   call,
//   delay,
  fork,
//   put,
//   select,
//   take,
//   takeEvery,
//   takeLatest,
} from 'redux-saga/effects';


/**
 * B1: Thực thi action fetch task
 * B2: Gọi api
 * B2.1: Hiển thị thanh tiến trình ( loading )
 * B3: Kiểm tra status code
 * Nếu thành công...
 * Nếu thất bại...
 * B4: Tắt loading
 * B5: Thực thi các công việc tiếp theo
 */






function* watchFetchListTaskAction() {
  console.log('Root Saga');
  yield true;
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);

}

export default rootSaga;

