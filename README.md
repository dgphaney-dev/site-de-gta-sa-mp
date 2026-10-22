# 🌐 Rede Babilônia RPG - Plataforma Web Oficial

![Badge](https://img.shields.io/badge/Tecnologia-100%25%20Front--End-00ff66?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages%20Ready-success?style=for-the-badge)

Plataforma web moderna, responsiva e de alta performance criada exclusivamente para a **Rede Babilônia RPG** (GTA SA:MP Multiplataforma Android & PC).

> 💡 **Projeto 100% Front-End Estático**: Não requer servidor backend (Node.js, PHP, Python) nem banco de dados (MySQL, MongoDB). Todo o ecossistema roda diretamente no navegador do usuário com velocidade instantânea, máxima segurança e custo zero de infraestrutura.

---

## 🎮 Diferenciais e Recursos do Front-End

- **Arquitetura 100% Client-Side**: Páginas estáticas ultra-rápidas construídas com HTML5 semântico, CSS3 modular e JavaScript puro (Vanilla ES6+).
- **Design System Gamer Dark & Verde Neon**:
  - Paleta oficial: Fundo preto profundo (`#08090a`), superfícies esmeralda e destaques em verde neon (`#00ff66`).
  - Tipografia: Títulos imponentes em *Rajdhani*, textos em *Inter* e títulos de impacto em arte *Street Graffiti*.
  - Efeitos visuais modernos: Glassmorphism (`backdrop-filter`), iluminação atmosférica radial e sombras neon vibrantes.
- **Cabeçalho Desktop Fixo com ScrollSpy Inteligente**:
  - Menu central com alinhamento matemático exato (`HOME`, `SERVIDORES`, `SISTEMAS`, `COMO JOGAR`, `VIP`, `CONTATO`).
  - Indicador animado em rabisco estilo grafite verde neon que se move dinamicamente conforme o usuário rola a página para cima ou para baixo.
  - Rolagem suave com compensação de altura para nunca cobrir os títulos das seções.
- **Experiência Mobile-First Real (Estilo App/PWA)**:
  - **Bottom Navigation Bar** fixa com botão central flutuante destacado (**BAB**).
  - Drawer deslizante fluido com todos os links institucionais.
  - Ocultação de elementos redundantes em telas menores para priorizar o toque e a leitura vertical.
- **Artes e Imagens Otimizadas em WebP**:
  - Redução drástica no peso de carregamento mantendo qualidade 4K UHD.
  - Carrossel de 5 sistemas exclusivos com painéis em quadrinhos estilo GTA.
- **Zero Dependências Pesadas**:
  - Sem bibliotecas externas pesadas ou frameworks complexos. Código limpo, sustentável e fácil de manter.

---

## 📂 Estrutura do Projeto

```text
babilonia-rpg/
├── index.html                 # Página principal (Landing page completa com Hero, Servidores e Carrossel)
├── servidores.html            # Monitoramento detalhado de servidores, status e IPs
├── sistemas.html              # Apresentação aprofundada dos sistemas exclusivos
├── downloads.html             # Central de downloads Android (APK/Google Play) e PC com requisitos
├── loja.html                  # Loja oficial com vitrine VIP e checkout Pix interativo
├── regras.html                # Diretrizes e regras gerais da comunidade
├── influenciadores.html       # Programa de criadores de conteúdo e parceiros
├── faq.html                   # Perguntas frequentes com acordeão dinâmico
├── suporte.html               # Central de ajuda, abertura de tickets e canal Discord
├── preview.html               # Simulador de telas e resoluções
├── assets/
│   ├── css/                   # Folhas de estilo modulares
│   │   ├── variables.css      # Variáveis de design (cores neon, fontes, espaçamentos)
│   │   ├── base.css           # Reset global, tipografia e scrollbar personalizada
│   │   ├── components.css     # Cabeçalho fixo, botões, cards, bottom nav e drawer
│   │   ├── landing.css        # Estilos específicos da página inicial
│   │   ├── scroll-reveal.css  # Animações de entrada ao rolar a página
│   │   └── ... (CSS de páginas específicas)
│   ├── js/                    # Módulos JavaScript puramente front-end
│   │   ├── main.js            # Inicializador global, drawer e ScrollSpy do header
│   │   ├── servers.js         # Renderização dinâmica e cópia de IP dos servidores
│   │   ├── systems-tabs.js    # Carrossel interativo de abas com autoplay
│   │   ├── loja.js            # Modal interativo de checkout Pix Copia-e-Cola
│   │   ├── toast.js           # Notificações visuais flutuantes
│   │   └── ... (Scripts modulares)
│   └── images/                # Artes oficiais, logos 3D e imagens em WebP/PNG
└── README.md                  # Documentação do projeto
```

---

## 🚀 Como Executar ou Hospedar

Por ser um projeto **100% Front-End estático**, você pode usá-lo de qualquer uma das formas abaixo:

### Opção 1: Abrir Diretamente no Computador
Basta dar um duplo clique no arquivo `index.html` para abrir o site em qualquer navegador (Chrome, Edge, Firefox, Safari, Opera).

### Opção 2: Hospedagem Gratuita no GitHub Pages
1. No seu repositório no GitHub, acesse **Settings** > **Pages**.
2. Em **Branch**, selecione `main` e a pasta `/ (root)`.
3. Clique em **Save**. Em instantes, o GitHub fornecerá um link público seguro com HTTPS para o seu site!

### Opção 3: Vercel / Netlify / Cloudflare Pages
Basta conectar o repositório do GitHub nessas plataformas e clicar em **Deploy**. Não requer nenhum comando de build (Build Command vazio) e o diretório de saída é a raiz `./`.

---

## 🛡️ Licença e Direitos

Projeto desenvolvido com exclusividade para a **Rede Babilônia RPG**. Todos os direitos reservados.
