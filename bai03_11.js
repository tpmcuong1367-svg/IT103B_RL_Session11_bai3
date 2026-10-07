console.log("=== 1. HOISTING ===");

console.log(turnOnDevice("Đèn phòng khách"));

function turnOnDevice(name) {
  return "Đã bật: " + name;
}

try {
  console.log(turnOffDevice("Điều hòa"));
} catch (error) {
  console.log("Function Expression lỗi:", error.message);
}
const turnOffDevice = function (name) {
  return "Đã tắt: " + name;
};

try {
  console.log(checkStatus("Quạt trần"));
} catch (error) {
  console.log("Arrow Function lỗi:", error.message);
}
const checkStatus = (name) => "Trạng thái của " + name + ": đang hoạt động";

console.log(turnOffDevice("Điều hòa"));
console.log(checkStatus("Quạt trần"));

console.log("\n=== 2. CON TRỎ this ===");

const smartLamp = {
  name: "Đèn ngủ",

  describeNormal: function () {
    return "Thiết bị: " + this.name;
  },

  describeArrow: () => {
    return "Thiết bị: " + this.name;
  },

  blinkWithFunction: function () {
    const results = [];
    [1, 2].forEach(function () {
      results.push(this === undefined ? "undefined" : typeof this.name);
    });
    return results;
  },

  blinkWithArrow: function () {
    const results = [];
    [1, 2].forEach(() => {
      results.push(this.name);
    });
    return results;
  },
};

console.log(smartLamp.describeNormal());
console.log(smartLamp.describeArrow());
console.log(smartLamp.blinkWithFunction());
console.log(smartLamp.blinkWithArrow());

console.log("\n=== 3. ĐỐI TƯỢNG arguments ===");

function sumPowerDeclaration() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

const sumPowerArrow = (...watts) => {
  let total = 0;
  for (let i = 0; i < watts.length; i++) {
    total += watts[i];
  }
  return total;
};

console.log(sumPowerDeclaration(1200, 60, 10));
console.log(sumPowerArrow(1200, 60, 10));