import getFullYear from "./utils";
import { getFooterCopy } from "./utils";
import { getLatestNotification } from "./utils";

test('getFullYear returns the current year', () =>{
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
})

test('getFooterCopy returns a string based on input', () =>{
    expect(getFooterCopy(true)).toBe('Holberton School');
})

test('getFooterCopy returns a string based on input', () =>{
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
})

test('getLatestNotification returns a string alert', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
})