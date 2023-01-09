const SET_NAVI_NUMBER = 'mainStore/SET_NAVI_NUMBER' as const;

export const setNaviNumber = (data: number) => ({
    type: SET_NAVI_NUMBER,
    payload: data,
});

type mainActions = ReturnType<typeof setNaviNumber>;

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언
type MainState = {
    navNumber: number;
};

// 초기값 선언
const initialState: MainState = {
    navNumber: 0,
};

// reducer 작성
const mainStore = (state: MainState = initialState, action: mainActions) => {
    switch (action.type) {
        case SET_NAVI_NUMBER:
            return {
                navNumber: action.payload || 0,
            };
        default:
            return state;
    }
};

export default mainStore;
