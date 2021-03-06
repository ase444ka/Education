import {endDigit} from 'Common/common'
export let data = {
    guests: {
        items: {
            "взрослые": {
                quantity: 0,
                maxQuantity: 100,
                writingMode:  function()  {
                    if (!this.quantity) return '';
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " взрослый";
                    }
                    return this.quantity + " взрослых";
                }
            },
            "дети": {
                quantity: 0,
                maxQuantity: 50,
                writingMode:  function()  {
                    if (!this.quantity) return '';
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " ребенок";
                    }
                    if (endDigit(this.quantity, 2,3,4)) {
                        return this.quantity + " ребенка";
                    }
                    return this.quantity + " детей";
                }
            },
            "младенцы": {
                quantity: 0,
                maxQuantity: 3,
                writingMode:  function()  {
                    if (!this.quantity) return '';
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " младенец";
                    }
                    if (endDigit(this.quantity, 2, 3, 4)) {
                        return this.quantity + " младенца";
                    }
                    return this.quantity + " младенцев";
                }
            },
            "гости": {
                quantity: 0,
                maxQuantity: 30,
                writingMode:  function()  {
                    if (!this.quantity) return '';
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " гость";
                    }
                    if (endDigit(this.quantity, 2, 3, 4)) {
                        return this.quantity + " гостя";
                    }
                    return this.quantity + " гостей";
                }
            },
        },
        result: function() {
            let res;
            this.items["гости"].quantity = this.items["взрослые"].quantity + this.items["дети"].quantity;
            res = this.items["гости"].writingMode() + (this.items["младенцы"].writingMode() && `, ${this.items["младенцы"].writingMode()}` || '')
            return res;
        },
        resultTotal: function() {
            let resArray = [];
            let res = '';
            if (this.items["взрослые"].quantity) resArray.push(this.items["взрослые"]);
            if (this.items["дети"].quantity) resArray.push(this.items["дети"]);
            if (this.items["младенцы"].quantity) resArray.push(this.items["младенцы"]);
            for (let item of resArray) {
                res += item.writingMode() + ', ';
            }
            res = res.slice(0, -2);
            return res;
        },
    },
    rooms: {
        items: {
            "спальни": {
                maxQuantity: 5,
                writingMode: function() {
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " спальня";
                    }
                    if (endDigit(this.quantity, 2,3,4)) {
                        return this.quantity + " спальни";
                    }
                    return this.quantity + " спален";
                }
            },
            "кровати": {
                maxQuantity: 30,
                writingMode: function() {
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " кровать";
                    }
                    if (endDigit(this.quantity, 2,3,4)) {
                        return this.quantity + " кровати";
                    }
                    return this.quantity + " кроватей";
                }
            },
            "ванные комнаты": {
                maxQuantity: 50,
                writingMode: function() {
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " ванная комната";
                    }
                    if (endDigit(this.quantity, 2,3,4)) {
                        return this.quantity + " ванные комнаты";
                    }
                    return this.quantity + " ванных комнат";
                }
            },
        },
        resultTotal: function() {
            let resArray = [];
            let res = '';
            if (this.items["спальни"].quantity) resArray.push(this.items["спальни"]);
            if (this.items["кровати"].quantity) resArray.push(this.items["кровати"]);
            if (this.items["ванные комнаты"].quantity) resArray.push(this.items["ванные комнаты"]);
            for (let item of resArray) {
                res += item.writingMode() + ', ';
            }
            res = res.slice(0, -2);
            return res;
        },
        result: function()  {
            return this.resultTotal();
        }
    }
};

