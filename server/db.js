const Pool = require('pg');
const bcrypt = require('bcrypt');

const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    database: 'User',
    port: 5432
});

pool.connect();

async function insertUser(data) {
    try {
        const { username, email, password } = data;
        const hashedPassword = await bcrypt.hash(password, 10);
        const insertUserQuery = 'INSERT INTO user_table(user_name, email, pass_key) VALUES ($1, $2, $3) RETURNING *';
        const result = await pool.query(insertUserQuery, [username, email, hashedPassword]);

        // Check the length of result.rows to determine if the insertion was successful
        if (result.rows.length > 0) {
            console.log('User inserted successfully:', result.rows[0]);
        } else {
            console.error('Error occurred in user registration. User not inserted.');
        }
    } catch (err) {
        console.error('Error occurred in user registration:', err);
    }
}

async function check_Username(username) {
    try {
        const findQuery = 'SELECT * FROM user_table WHERE user_name = $1';
        const result = await pool.query(findQuery, [username]);

        // Handle the result as needed
        if (result.rows.length > 0) {
            const user = result.rows[0];
            console.log('User found:', user);
            return user;
        } else {
            console.log('User not found');
            return null;
        }
    } catch (err) {
        console.error('Error occurred while finding user by username:', err);
        throw err; // Rethrow the error to be caught by the calling code or handled appropriately
    }
}

async function check_email(email) {
    try {
        const findQuery = 'SELECT * FROM user_table WHERE email = $1';
        const result = await pool.query(findQuery, [email]);

        if (result.rows.length > 0) {
            const foundEmail = result.rows[0];
            console.log('Email found:', foundEmail);
            return foundEmail;
        } else {
            console.log('Email not found');
            return null;
        }
    } catch (err) {
        console.error('Error occurred while finding user by email:', err);
        throw err; // Rethrow the error to be caught by the calling code or handled appropriately
    }
}

async function validate(data) {
    try {
        let usernameStatus = false;
        let emailStatus = false;

        const user = await check_Username(data.username);
        const email = await check_email(data.email);

        if (user !== null && email !== null) {
            usernameStatus = true;
            emailStatus = true;
        } else if (user !== null && email === null) {
            usernameStatus = true;
        } else if (user === null && email !== null) {
            emailStatus = true;
        }

        // Use usernameStatus and emailStatus as needed for your validation logic

    } catch (error) {
        console.error('Error occurred during validation:', error);
        throw error; // Rethrow the error to be caught by the calling code or handled appropriately
    }
}

// Example usage:


module.exports={
    insertUser,
    check_Username,
    check_email,
    validate

}
