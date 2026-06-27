const assetImages = {
  recife: "assets/img/recife.png",
  salvador: "assets/img/salvador.png",
  fortaleza: "assets/img/fortaleza.jpg",
  savory: "assets/img/cardapio.png",
  acaraje: "assets/img/acaraje.jpg",
  baiao: "assets/img/baiao.png",
  escondidinho: "assets/img/escondidinho.jpg",
  cocada: "assets/img/cocada.jpg",
  pudim: "assets/img/pudim.jpg",
  cardapio: "assets/img/cardapio-banner.png"
};

window.RAIZES_MOCK = {
  channels: [
    { id: "web", label: "Web" },
    { id: "app", label: "App" },
  ],
  serviceModes: [
    { id: "retirada", label: "Retirada" },
    { id: "delivery", label: "Delivery" },
    { id: "totem", label: "Totem" }
  ],
  units: [
    {
      id: "gracas",
      name: "Recife - Graças",
      city: "Recife",
      neighborhood: "Graças",
      address: "Av. Conselheiro Rosa e Silva, 162 - Graças, Recife - PE, 52050-225",
      hours: "09h às 23h",
      eta: "20 a 30 min",
      deliveryFee: 8.0,
      rating: 4.8,
      status: "Aberta",
      image: assetImages.recife,
      channels: ["web", "app", "totem"],
      highlights: ["Retirada expressa", "Promoção de almoço"]
    },
    {
      id: "lago-bonfim",
      name: "Salvador",
      city: "Salvador",
      neighborhood: "Largo do Bonfim",
      address: "Bonfim, Salvador - BA, 40415-430",
      hours: "10h às 21h",
      eta: "25 a 35 min",
      deliveryFee: 8.1,
      rating: 4.9,
      status: "Aberta",
      image: assetImages.salvador,
      channels: ["web", "app", "totem"],
      highlights: ["Acarajé da casa"]
    },
    {
      id: "manibura",
      name: "Fortaleza - Manibura",
      city: "Fortaleza",
      neighborhood: "Parque Manibura",
      address: "R. República da Armênia, 1098 - Parque Manibura, Fortaleza - CE, 60821-760",
      hours: "09h às 22h",
      eta: "20 a 30 min",
      deliveryFee: 7.2,
      rating: 4.7,
      status: "Aberta",
      image: assetImages.fortaleza,
      channels: ["web", "app", "totem"],
      highlights: ["Baião e tapioca", "Retirada inteligente", "Sobremesas regionais"]
    }
  ],
  campaigns: [
    {
      id: "camp-1",
      title: "Almoço Raízes Recife",
      description: "Desconto em pedidos acima de R$ 50 na unidade de Recife.",
      unitId: "gracas",
      image: assetImages.baiao,
      discountRate: 10,
      minimumOrder: 50
    },
    {
      id: "camp-2",
      title: "Dobro de pontos no App",
      description: "Pedidos feitos no canal App recebem pontos extras na unidade de Salvador.",
      unitId: "lago-bonfim",
      image: assetImages.acaraje,
      discountRate: 8,
      minimumOrder: 60
    },
    {
      id: "camp-3",
      title: "Combo Família do Sertão",
      description: "Desconto automático em pedidos acima de R$ 70 para toda a rede.",
      unitId: "all",
      image: assetImages.dessert,
      discountRate: 12,
      minimumOrder: 70
    }
  ],
  rewards: [
    {
      id: "reward-1",
      title: "Cupom de R$ 10,00.",
      points: 80,
      description: "Cupom aplicado em pedidos acima de R$ 30,00"
    },
    {
      id: "reward-2",
      title: "Cupom de R$ 20,00.",
      points: 150,
      description: "Cupom aplicado em pedidos acima de R$ 60,00"
    },
    {
      id: "reward-3",
      title: "Cupom de R$ 30,00.",
      points: 230,
      description: "Cupom aplicado em pedidos acima de R$ 100,00."
    }
  ],
  users: [
    {
      id: "user-1",
      name: "guilherme",
      email: "guilherme@email.com",
      phone: "(11) 95990-1295",
      password: "teste123",
      preferredChannel: "app",
      goal: "delivery",
      marketing: true,
      role: "customer"
    },
    {
      id: "user-2",
      name: "Gestão Raízes",
      email: "admin@email.com",
      phone: "(11) 00000-0000",
      password: "admin123",
      preferredChannel: "app",
      goal: "retirada",
      marketing: false,
      role: "admin"
    }
  ],
  menuItems: [
    {
      id: "rec-1",
      unitId: "gracas",
      category: "Pratos principais",
      name: "Baião Cremoso Raízes",
      description: "Arroz, feijão verde, queijo coalho, nata da casa e carne de sol desfiada.",
      image: assetImages.baiao,
      price: 36.9,
      prepTime: "17 min",
      tags: ["Mais pedido"]
    },
    {
      id: "rec-2",
      unitId: "gracas",
      category: "Combos",
      name: "Combo Recife Raízes",
      description: "Baião cremoso, refresco natural da casa.",
      image: assetImages.baiao,
      price: 47.9,
      prepTime: "25 min",
      tags: ["Almoço"]
    },
    {
      id: "rec-3",
      unitId: "gracas",
      category: "Bebidas",
      name: "Refresco de Cajá",
      description: "Bebida gelada, cítrica e natural, preparada na hora.",
      image: assetImages.drink,
      price: 10.9,
      prepTime: "5 min",
      tags: ["Natural", "Sem conservantes"]
    },
    {
      id: "sal-1",
      unitId: "lago-bonfim",
      category: "Pratos principais",
      name: "Acarajé Completo",
      description: "Bolinho de feijão fradinho com vatapá, camarão e salada fresca.",
      image: assetImages.acaraje,
      price: 31.9,
      prepTime: "15 min",
      tags: ["Tradicional"]
    },
    {
      id: "sal-2",
      unitId: "lago-bonfim",
      category: "Combos",
      name: "Combo do Lago",
      description: "Acarajé, cocada cremosa e um suco especial da casa!",
      image: assetImages.acaraje,
      price: 44.9,
      prepTime: "18 min",
      tags: ["Combo"]
    },
    {
      id: "sal-3",
      unitId: "lago-bonfim",
      category: "Sobremesas",
      name: "Cocada Cremosa Premium",
      description: "Coco fresco, leite condensado e um leve toque de canela",
      image: assetImages.cocada,
      price: 15.9,
      prepTime: "6 min",
      tags: ["Favorita", "Sobremesa da casa"]
    },
    {
      id: "sal-4",
      unitId: "lago-bonfim",
      category: "Bebidas",
      name: "Refresco de Tamarindo",
      description: "Bebida cítrica.",
      image: assetImages.drink,
      price: 11.9,
      prepTime: "4 min",
      tags: ["Refrescante", "Exclusiva"]
    },
    {
      id: "for-1",
      unitId: "manibura",
      category: "Pratos principais",
      name: "Escondidinho da Casa",
      description: "Purê de macaxeira gratinado, carne de sol e queijo coalho tostado.",
      image: assetImages.escondidinho,
      price: 35.9,
      prepTime: "17 min",
      tags: ["Campeão de vendas", "Forno"]
    },
    {
      id: "for-2",
      unitId: "manibura",
      category: "Combos",
      name: "Combo Família Fortaleza",
      description: "Escondidinho grande e 2 bebidas regionais.",
      image: assetImages.escondidinho,
      price: 72.9,
      prepTime: "22 min",
      tags: ["Ideal para compartilhar", "Família"]
    },
    {
      id: "for-3",
      unitId: "manibura",
      category: "Sobremesas",
      name: "Pudim de Tapioca",
      description: "Sobremesa gelada com coco ralado fresco e calda suave de baunilha.",
      image: assetImages.pudim,
      price: 16.9,
      prepTime: "7 min",
      tags: ["Doce regional", "Final perfeito"]
    }
  ],
  adminAlerts: [
    "Pedidos sendo atendidos abaixo de 15 minutos em Recife.",
    "Salvador maior nota de nossas unidades em 4,8 de 5!!!",
    "Unidade de Fortaleza com melhor tempo médio de preparo."
  ]
};