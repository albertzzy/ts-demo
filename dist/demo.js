/* class Dog {
    name: string;
}
class  Animal extends  Dog{
    breed: string;
}
    // 错误：使用'string'索引，有时会得到Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

interface NumberDictionary {
    [inde: string]: number;
    length: number; // 可以，length是number类型
    name: number // 错误，`name`的类型与索引类型返回值的类型不匹配
}
 */
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    DigitalClock.prototype.foo = function () { };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    AnalogClock.prototype.foo = function () { };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
//# sourceMappingURL=demo.js.map