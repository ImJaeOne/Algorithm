function solution(phone_number) {
    const phoneNumArr = phone_number.split('');
    return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}