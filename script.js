// 密码验证通用函数
function checkPassword(inputId, correctPwd, redirectUrl) {
    const input = document.getElementById(inputId).value.trim();
    if (input === correctPwd) {
        window.location.href = redirectUrl;
    } else {
        alert("密码错误，权限不足");
    }
}

// 页面加载完成后打印控制台彩蛋
window.addEventListener('load', () => {
    if (window.location.pathname === '/secret/doc_2.html') {
        console.log("%c[ 系统提示 ]", "color:red;font-size:16px;");
        console.log("最终密钥的答案，藏在所有日志的标题首字里。");
        console.log("不要相信官方的说法。");
    }
});

