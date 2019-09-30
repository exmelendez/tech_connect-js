const INPUTS = document.getElementsByTagName('input');
const SUBMIT_BTN = document.querySelector('button');

const POINT_ASSESSER = mphOver => {
    if (mphOver > 0 && mphOver < 11) {
        return 3;

    } else if (mphOver > 10 && mphOver < 21) {
        return 4;

    } else if(mphOver > 20 && mphOver < 31) {
        return 6;

    } else if(mphOver > 30 && mphOver < 41) {
        return 8;

    } else if (mphOver > 40) {
        return 11;
    }
};

const RESET_INPUTS = () => {
    INPUTS[0].value = '';
    INPUTS[1].value = '';
};

const STATUS_MSG = (type, msgList) => {
    const MSG_DIV = document.querySelector('div');
    MSG_DIV.innerHTML = "";
    let statusColor = 'red';

    const NEW_P = document.createElement('p');
    NEW_P.textContent = msgList[0];

    if(type === 'error') {
        NEW_P.setAttribute('style', `color: ${statusColor};`);

        MSG_DIV.appendChild(NEW_P);

    } else if (type === 'success') {
        statusColor = 'green';
        NEW_P.setAttribute('style', `color: ${statusColor};`);

        const NEW_P2 = document.createElement('p');
        NEW_P2.textContent = msgList[1];
        NEW_P2.setAttribute('style', `color: ${statusColor};`);

        MSG_DIV.appendChild(NEW_P);
        MSG_DIV.appendChild(NEW_P2);
    }
};

SUBMIT_BTN.addEventListener('click', () => {
    const DRIVING_SPEED_INP = INPUTS[1].value;

    if(DRIVING_SPEED_INP === '' ) {
        STATUS_MSG('error', ['Be sure to enter your speed']);

    } else {
        const POSTED_LIMIT = Number(INPUTS[0].value);
        const DRIVING_SPEED = Number(DRIVING_SPEED_INP);

        if(POSTED_LIMIT === 0) {
            STATUS_MSG('success', [`You were driving ${DRIVING_SPEED_INP - POSTED_LIMIT}MPH.`, '3 Points will be added to your license']);

            RESET_INPUTS();
        } else if(DRIVING_SPEED > POSTED_LIMIT) {
            const MILES_OVER = DRIVING_SPEED_INP - POSTED_LIMIT;

            STATUS_MSG('success', [`You were driving ${MILES_OVER}MPH.`, `${POINT_ASSESSER(MILES_OVER)} Points will be added to your license`]);

            RESET_INPUTS();
        } else {
            STATUS_MSG('error', ['incorrect data entered']);
        }
    }
});