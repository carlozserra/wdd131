


//essas variaveis puxam as tags do HTML
    const input = document.querySelector('#favchap'); //input
    const button = document.querySelector('button'); //button
    const list = document.querySelector('#list'); //list
    

    

    //esse evento define oque acontece quando clica
    button.addEventListener('click', function(){

        if (input.value.trim() !== '') {

            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
             
            //essa tag cria um espaço em branco para lista
            li.textContent = input.value;
            deleteButton.textContent = '❌';

            // Adiciona o botão de deletar ao li
            li.append(deleteButton);

            // Adiciona o li à lista (ul)
            list.append(li);

            // Limpa o campo de input após adicionar o item
            input.value = '';
            
            // Foco no input novamente para outra entrada
            input.focus();
            
            //esse evento define oque acontece ao apertar delete
            deleteButton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();

            });
        }

        });
    

        
   


   

