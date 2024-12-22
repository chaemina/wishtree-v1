export const saveToken = (token: string) => {
    localStorage.setItem('token', token); // 로컬 스토리지에 토큰 저장
};

export const getToken = (): string | null => {
    return localStorage.getItem('token'); // 로컬 스토리지에서 토큰 반환
};

