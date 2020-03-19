const btnSend = document.getElementById('btnSend');
const inputMsg = document.getElementById('inputMsg');
const chatroomContent = document.getElementById('chatroomContent');
btnSend.addEventListener('click', (e) => {
  main();
});

inputMsg.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    main();
  }
});

const sendMsg = (msg) => {
  return new Promise((resolve, reject) => {
    try {
      const myMsgDiv = document.createElement('div');
      myMsgDiv.classList = 'row m-4';
      const subDiv = document.createElement('div');
      subDiv.classList = 'col-md-12 text-right';
      const h4Tag = document.createElement('h4');
      const spanTag = document.createElement('span');
      spanTag.classList = 'badge badge-light badge-pill';
      const msgContent = document.createTextNode(msg);
      spanTag.appendChild(msgContent);
      h4Tag.appendChild(spanTag);
      subDiv.appendChild(h4Tag);
      myMsgDiv.appendChild(subDiv);
      chatroomContent.appendChild(myMsgDiv);
      chatroomContent.scrollTop = chatroomContent.scrollHeight;
      inputMsg.value = '';
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

const receiveMsg = (msg) => {
  return new Promise(async (resolve, reject) => {
    try {
      const myMsgDiv = document.createElement('div');
      myMsgDiv.classList = 'row m-4';
      const subDiv = document.createElement('div');
      subDiv.classList = 'col-md-12t';
      const h4Tag = document.createElement('h4');
      const spanTag = document.createElement('span');
      spanTag.classList = 'badge badge-light badge-pill';
      await sleep(2000);
      const msgContent = document.createTextNode(`You've just said: ${msg}`);
      spanTag.appendChild(msgContent);
      h4Tag.appendChild(spanTag);
      subDiv.appendChild(h4Tag);
      myMsgDiv.appendChild(subDiv);
      chatroomContent.appendChild(myMsgDiv);
      chatroomContent.scrollTop = chatroomContent.scrollHeight;
      inputMsg.value = '';
      resolve(true);
    } catch (err) {
      reject(err);
    }    
  });
}

const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(true), time));
const main = async () => {
  if (inputMsg.value === '') {
    return false;
  }
  const msg = inputMsg.value;
  await sendMsg(msg);
  await receiveMsg(msg);
}