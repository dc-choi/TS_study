let code = null;

if (!code) {
    console.log("null");
}

code = "";

if (!code) {
    console.log("empty string");
}

code = undefined;

if (!code) {
    console.log("undefined");
}

code = "hello";

// 출력 X
if (!code) {
    console.log("hello");
}
