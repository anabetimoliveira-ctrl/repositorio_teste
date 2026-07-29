// Funcionalidade do Botão de Curtir
let likes = 0;
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');

likeBtn.addEventListener('click', () => {
    likes++;
    likeCount.textContent = likes;
});

// Funcionalidade de Adicionar Comentários Dinamicamente
const commentForm = document.getElementById('comment-form');
const commentsList = document.getElementById('comments-list');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;

    // Criar o elemento do novo comentário
    const newComment = document.createElement('div');
    newComment.classList.add('comment-item');
    newComment.innerHTML = `<strong>${nome}</strong><p>${comentario}</p>`;

    // Adicionar à lista e limpar os campos
    commentsList.appendChild(newComment);
    commentForm.reset();
});