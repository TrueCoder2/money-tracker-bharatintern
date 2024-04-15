let totalAmount = 0;
let expenses =[]
const categorySelect = document.getElementById('category_select')
const amountInput = document.getElementById('amount_input')
const InfoInput = document.getElementById('info')
const dateInput = document.getElementById('date_input')
const addBtn = document.getElementById('add_btn')
const expenseTableBody = document.getElementById('expense-table-body')
const totalAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click',function(){
    const category=categorySelect.value;
    const info=InfoInput.value;
    const amount =Number(amountInput.value);
    const date = dateInput.value;

    if(category ===''){
        alert('please select a category');
        return;
    }
    if(isNaN(amount) || amount<=0){
        alert('please enter a valid amount');
        return;
    }
    if(info ===''){
        alert('please enter a valid amount info');
        return;
    }
    if(date ===''){
        alert('please select a date');
        return;
    }
    expenses.push({category,amount,info,date})
    if(category === 'Income'){
        totalAmount+=amount;
    }
    if(category === 'Expense'){
        totalAmount-=amount;
    }
     totalAmountCell.textContent = totalAmount;

     const newRow = expenseTableBody.insertRow();

     const categoryCell = newRow.insertCell();
     const AmountCell = newRow.insertCell();
     const InfoCell = newRow.insertCell();
     const dateCell = newRow.insertCell();
     const deleteCell = newRow.insertCell();

     const deleteBtn = document.createElement('button');
     deleteBtn.textContent ='Delete';
     deleteBtn.style.backgroundColor="#f87171"
     deleteBtn.style.color="white"
     deleteBtn.style.padding="8px 18px"
     deleteBtn.style.borderRadius="10px"
     deleteBtn.style.fontWeight="600"
     deleteBtn.style.margin = "8px 15px"
     deleteBtn.classList.add('delete-btn');
     deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);
        if(category === 'Income'){
            totalAmount-=amount;
        }
        if(category === 'Expense'){
            totalAmount+=amount;
        }

        totalAmountCell.textContent=totalAmount;
        expenseTableBody.removeChild(newRow)
     })
     const expense = expenses[expenses.length-1];
     categoryCell.textContent=expense.category;
     AmountCell.textContent=expense.amount;
     InfoCell.textContent=expense.info;
     dateCell.textContent=expense.date;
     deleteCell.appendChild(deleteBtn);


});
for(const expense of expenses){
    if(category === 'Income'){
        totalAmount+=amount;
    }
    if(category === 'Expense'){
        totalAmount-=amount;
    }
     totalAmountCell.textContent = totalAmount;

     const newRow = expenseTableBody.insertRow();

     const categoryCell = newRow.insertCell();
     const AmountCell = newRow.insertCell();
     const InfoCell = newRow.insertCell();
     const dateCell = newRow.insertCell();
     const deleteCell = newRow.insertCell();

     const deleteBtn = document.createElement('button');
     deleteBtn.textContent ='Delete';
     deleteBtn.classList.add('delete-btn');
     deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);
        if(category === 'Income'){
            totalAmount-=amount;
        } 
        if(category === 'Expense'){
            totalAmount+=amount;
        }

        totalAmountCell.textContent=totalAmount;
        expenseTableBody.removeChild(new Row)
     })
     const expense = expenses[expenses.length-1];
     categoryCell.textContent=expense.category;
     AmountCell.textContent=expense.amount;
     InfoCell.textContent=expense.info;
     dateCell.textContent=expense.date;
     deleteCell.appendChild(deleteBtn);
}