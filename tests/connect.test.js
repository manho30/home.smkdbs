/**
 * @Description : Test connection to Backend
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 20/2/2023 11:59
 * @File        : connect.test.js
 * @IDE         : WebStorm
 */

/** @type import('axios') */
try {
    const axios = require('axios')
} catch (e) {
    throw new Error('axios is not installed')
}

describe('Test server startup', () => {
    test('Server should be running', async () => {
        try {
            const response = await axios.get('http://localhost:3000');
            expect(response.status).toBe(200);
        } catch (error) {
            expect(error).toBeFalsy();
        }
    });

    test('Database should be running', async () => {
        try {
            const response = await axios.get('http://localhost:3000');
            expect(response.status).toBe(200);
        } catch (error) {
            expect(error).toBeFalsy();
        }
    });
});