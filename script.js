const produtos = [

  {
    id: 1,
    nome: "Tapioca de Carne",
    preco: 18,
    categoria: "Tapiocas",
    imagem: "https://images.pexels.com/photos/11094180/pexels-photo-11094180.jpeg"
  },

  {
    id: 2,
    nome: "Cuscuz Completo",
    preco: 22,
    categoria: "Cuscuz",
    imagem: "https://images.pexels.com/photos/34314361/pexels-photo-34314361.jpeg"
  },

  {
    id: 3,
    nome: "Açaí de 300ml (Castanhas e Granolas)",
    preco: 10,
    categoria: "Açaí",
    imagem: "https://images.pexels.com/photos/8465241/pexels-photo-8465241.jpeg"
  },

  {
    id: 4,
    nome: "Suco de Cajá",
    preco: 12,
    categoria: "Bebidas",
    imagem: "https://images.pexels.com/photos/7377108/pexels-photo-7377108.jpeg"
  },

  {
    id: 5,
    nome: "Açaí de 500ml (Morango Cortado, Granola e Paçoca)",
    preco: 16,
    categoria: "Açaí",
    imagem: "https://images.pexels.com/photos/20203702/pexels-photo-20203702.jpeg"
  }

]

let carrinho = []
let pontos = 0

const menu = document.getElementById("menu")
const cart = document.getElementById("cart")
const total = document.getElementById("total")

function fazerLogin() {

  const email =
    document.getElementById("email").value

  const senha =
    document.getElementById("senha").value

  const lgpd =
    document.getElementById("lgpdCheck").checked

  if(email === "" || senha === "") {

    alert("Preencha todos os campos")
    return
  }

  if(!lgpd) {

    alert("Aceite os termos LGPD")
    return
  }

  document
    .getElementById("loginScreen")
    .classList.add("hidden")

  document
    .getElementById("mainApp")
    .classList.remove("hidden")
}

function renderMenu() {

  menu.innerHTML = ""

  const categorias = {}

  produtos.forEach(produto => {

    if(!categorias[produto.categoria]) {
      categorias[produto.categoria] = []
    }

    categorias[produto.categoria].push(produto)
  })

  for(const categoria in categorias) {

    menu.innerHTML += `
      <h3 class="categoria-titulo">
        ${categoria}
      </h3>
    `

    categorias[categoria].forEach(produto => {

      menu.innerHTML += `
        <div class="menu-item">

          <div class="produto-info">

            <img
              src="${produto.imagem}"
              alt="${produto.nome}"
            >

            <div>

              <h3>${produto.nome}</h3>

              <p>
                R$ ${produto.preco}
              </p>

            </div>

          </div>

          <button onclick="adicionarCarrinho(${produto.id})">
            Adicionar
          </button>

        </div>
      `
    })
  }
}

function adicionarCarrinho(id) {

  const produto =
    produtos.find(p => p.id === id)

  carrinho.push(produto)

  atualizarCarrinho()
}

function removerItem(index) {

  carrinho.splice(index, 1)

  atualizarCarrinho()
}

function atualizarCarrinho() {

  cart.innerHTML = ""

  let soma = 0

  carrinho.forEach((item, index) => {

    soma += item.preco

    cart.innerHTML += `
      <div class="cart-item">

        <p>
          ${item.nome} - R$ ${item.preco}
        </p>

        <button onclick="removerItem(${index})">
          Remover
        </button>

      </div>
    `
  })

  total.innerText = `Total: R$ ${soma}`
}

function selecionarUnidade(unidade) {

  document
    .getElementById("unidadeSelecionada")
    .innerText =
    `Unidade selecionada: ${unidade}`
}

function finalizarPedido() {

  const metodo =
    document.getElementById("paymentMethod").value

  if(carrinho.length === 0) {

    alert("Adicione itens ao carrinho")
    return
  }

  if(metodo === "") {

    alert("Escolha uma forma de pagamento")
    return
  }

  alert(
    `Redirecionando pagamento via ${metodo}...`
  )

  setTimeout(() => {

    document
      .getElementById("preparo")
      .classList.add("active")

  }, 1500)

  setTimeout(() => {

    document
      .getElementById("rota")
      .classList.add("active")

  }, 3000)

  setTimeout(() => {

    document
      .getElementById("final")
      .classList.add("active")

    pontos += 10

    document
      .getElementById("points")
      .innerText =
      `Você possui ${pontos} pontos`

    if(pontos >= 50) {

      document
        .getElementById("reward")
        .innerText =
        "Você desbloqueou um cupom de 10% OFF!!!"
    }

    alert("Pedido finalizado com sucesso!")

  }, 5000)
}

renderMenu()