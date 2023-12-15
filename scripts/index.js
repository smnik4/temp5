let     plus = document.getElementById('plus'),
        minus = document.getElementById('minus'),
        umn = document.getElementById('umn'),
        div = document.getElementById('div'),
        a = document.getElementById('a'),
        b = document.getElementById('b');

plus.addEventListener("click", calc, false);
minus.addEventListener("click", calc, false);
umn.addEventListener("click", calc, false);
div.addEventListener("click", calc, false);
a.addEventListener("change", calc, false);
b.addEventListener("change", calc, false);

const print = function(res, resValue){
    if(resValue > 0){
        res.style.color = 'green';
    }else{
        res.style.color = 'red';
    }
};

function calc(event) {
    let operation = event.target.getAttribute("id");
    let a = document.getElementById('a').value,
            b = document.getElementById('b').value,
            lo = document.getElementById('lo'),
            res = document.getElementById('result');
    if (a.length === 0) {
        a = 0;
    }
    if (b.length === 0) {
        b = 0;
    }
    if(operation === "a" || operation === "b"){
        if(lo.textContent.length > 0){
            switch (lo.textContent) {
                case "+":
                    operation = 'plus';
                    break;
                case "-":
                    operation = 'minus';
                    break;
                case "*":
                    operation = 'umn';
                    break;
                case "/":
                    operation = 'div';
                    break;
            }
        }
    }
    let resValue = null;
    switch (operation) {
        case 'plus':
            resValue = Number(a) + Number(b);
            lo.textContent = "+";
            break;
        case 'minus':
            resValue = Number(a) - Number(b);
            lo.textContent = "-";
            break;
        case 'umn':
            resValue = Number(a) * Number(b);
            lo.textContent = "*";
            break;
        case 'div':
            resValue = Number(a) / Number(b);
            lo.textContent = "/";
            break
        default :
            alert("Операция не определена");
    }
    res.textContent = Math.round(resValue * 100,2) / 100;
    print(res,resValue);
}
