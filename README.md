# 📖 Documentação do Projeto: Rede Babilônia RPG

![Logo Rede Babilônia RPG](/C:/Users/PICHAU/.gemini/antigravity/brain/be19e1c1-b798-4a29-a7e9-ee87d8922771/logo-babilonia.jpg)

---

## 1. Visão Geral do Projeto

A **Rede Babilônia RPG** é uma plataforma web completa voltada para um servidor de GTA SA:MP (San Andreas Multiplayer) com suporte multiplataforma (Android e PC).

O projeto é composto por **duas soluções integradas em um único ecossistema web**:
1. **Landing Page Institucional (Pública)**: Focada em conversão, apresentação dos diferenciais do servidor, downloads multiplataforma (Google Play / APK / PC) e divulgação da comunidade.
2. **UCP - User Control Panel (Painel do Jogador - Autenticado)**: Painel interativo mobile-first para o jogador gerenciar sua conta, visualizar estatísticas em tempo real, acompanhar patrimônio, interagir na rede social in-game e comprar itens/VIPs na loja integrada.

> [!NOTE]
> **Divisão de Responsabilidades**: O desenvolvimento do servidor SA:MP (gamemode / pawn) é independente. O escopo deste projeto abrange 100% da **solução web (frontend, backend, design system e integrações de API/banco de dados)**.

---

## 2. Identidade Visual & UI/UX

A identidade visual foi definida a partir da arte oficial da **Rede Babilônia RPG**, adotando uma estética **Gamer Dark & Neon Emerald**, com alto contraste e elegância.

### Paleta de Cores Oficial

| Aplicação | Cor Hex | Descrição |
| :--- | :--- | :--- |
| **Fundo Primário** | `#08090A` | Preto profundo para máxima imersão dark |
| **Fundo de Cards/Superfícies** | `#111613` | Grafite escuro com leve nuance esmeralda |
| **Bordas & Divisores** | `#1C2620` | Linhas sutis para separação de componentes |
| **Verde Neon Primário** | `#00FF66` | Destaques principais, badges, status online e CTAs |
| **Verde Esmeralda Secundário** | `#059669` / `#10B981` | Gradientes, botões secundários e barras de progresso |
| **Texto de Destaque** | `#FFFFFF` | Branco puro para títulos e números |
| **Texto Secundário** | `#9CA3AF` | Cinza claro para descrições e legendas |

### Diretrizes de Experiência do Usuário (UX)
* **Mobile-First Real**: Como mais de 70% do público de SA:MP atual joga no celular (Android), o site deve se comportar como um **aplicativo nativo (PWA)** no celular:
  * **Bottom Navigation Bar** fixa com botão central flutuante destacado.
  * Drawer lateral fluido para menus aprofundados.
  * Toques rápidos, animações suaves e layouts em cards de fácil leitura em telas verticais.
* **Elementos 3D "Pop-Out"**: Personagens e veículos estilizados vazando dos frames de celular e monitores, gerando profundidade e estética moderna.

---

## 3. Mapeamento de Módulos & Telas

### 🚀 Módulo 1: Landing Page Pública

1. **Header & Navegação Superior**:
   * Logotipo da Rede Babilônia RPG com efeito neon;
   * Indicador rápido de servidores e botão de acesso à conta/painel.

2. **Hero Section (Apresentação)**:
   * Chamada de impacto (*"Venha fazer parte dessa família"*);
   * Contador geral de jogadores online somando todos os servidores;
   * Botão principal de ação rápida (*"Baixar Agora"*).

3. **Status dos Servidores em Tempo Real**:
   * Cards individuais para cada servidor (ex: Servidor #1, Servidor #2);
   * Monitoramento dinâmico: IP, status (Online/Offline), contagem de players/slots (ex: `147/800`);
   * Botão **One-Click Copy**: Copia o IP diretamente para a área de transferência do celular ou PC.

4. **Carrossel Interativo de Sistemas (Features com Autoplay)**:
   * Barra horizontal com ícones e barra de progresso temporal automática:
     * 👥 **Monte sua Gangue**: Liderança de organizações, invasões e dominação de territórios.
     * 📅 **Eventos Diários**: Missões e recompensas programadas diariamente.
     * ⛰️ **Guerra do Morro**: Disputa armada por favelas e pontos estratégicos em horários marcados.
     * 🛡️ **Torne-se um Policial**: Carreiras nas forças policiais, viaturas táticas e investigações.
     * 🚚 **Empregos & Economia**: Carreira civil, entregas, comércios e compra de bens.

5. **Área de Downloads Multiplataforma**:
   * **Android**: Botão oficial da Google Play Store + Download de APK direto com render 3D em perspectiva.
   * **PC**: Guia rápido em 3 passos (1. Baixar GTA SA $\rightarrow$ 2. Baixar SA:MP $\rightarrow$ 3. Conectar) + Modal de **Requisitos Mínimos** de sistema.

6. **Área de Influenciadores & Comunidade**:
   * Vitrine com criadores de conteúdo parceiros e contadores de visualizações/inscritos;
   * Card de recrutamento com CTA *"Quero ser um influenciador"* (leva a formulário).

7. **FAQ, Redes Sociais & Footer**:
   * Acordeão de perguntas frequentes (Como instalar, como comprar moedas, regras);
   * Links sociais oficiais (Discord, YouTube, Instagram, WhatsApp, TikTok);
   * LGPD / Banner de cookies e rodapé institucional com termos e CNPJ.

---

### 🛡️ Módulo 2: UCP - Painel do Jogador (Área Autenticada)

1. **Login & Segurança**:
   * Autenticação direta com o nickname e senha do jogador no banco de dados do servidor;
   * Proteção contra ataques de força bruta (Rate limiting).

2. **Dashboard do Personagem**:
   * Card de Boas-vindas com render da skin atual do jogador;
   * Nível atual, Respeitos (barra de progresso para o próximo nível);
   * Tempo jogado total e tempo jogado hoje;
   * Status VIP com contagem regressiva de dias restantes.

3. **Gamificação Diária (Tickets do Dia)**:
   * Barra de progresso acumulativa por horas conectadas;
   * Contador regressivo para o reset diário;
   * Sistema de resgate de recompensas in-game.

4. **Central de Patrimônio & Inventário**:
   * Visualização gráfica dos itens no inventário (`ex: 44/75 slots ocupados`);
   * Lista de veículos próprios (modelo, placa, tunagem);
   * Listagem de casas, empresas, portões e baús vinculados à conta.

5. **Rede Social Integrada ("InstaBabilônia")**:
   * Feed exclusivo para postagem de prints e momentos in-game tirados pelos jogadores;
   * Sistema de curtidas e ranking semanal das fotos em alta.

6. **Loja Integrada (E-Commerce com Pix Automático)**:
   * Catálogo de Moedas (Coins/Babilônia Cash) e Pacotes VIP;
   * Checkout transparente com **QR Code Pix Dinâmico e Copia-e-Cola**;
   * Confirmação instantânea via webhook e entrega dos créditos direto no banco do jogo.

7. **Atendimento & Seletivas**:
   * Sistema de chamados/ouvidoria para denúncias e suporte;
   * Formulários dinâmicos de inscrição para facções e administração.

---

## 4. Arquitetura Técnica & Stack Recomendada

```
                                  ┌────────────────────────┐
                                  │      CLIENTE WEB       │
                                  │  (Next.js / Tailwind)  │
                                  │  Mobile-First PWA      │
                                  └───────────┬────────────┘
                                              │ HTTPS / JSON
                                              ▼
                                  ┌────────────────────────┐
                                  │      BACKEND / API     │
                                  │   (Next.js API Routes) │
                                  └─────┬────────────┬─────┘
                                        │            │
            ┌───────────────────────────┘            └───────────────────────────┐
            │ UDP Query                                                          │ SQL / Webhooks
            ▼                                                                    ▼
┌────────────────────────┐                                           ┌────────────────────────┐
│  SERVIDOR GTA SA:MP    │                                           │      BANCO DE DADOS    │
│  (Status online/slots) │                                           │     MySQL do Servidor  │
│  Porta: 7777           │                                           │  (Contas, VIPs, Bens)  │
└────────────────────────┘                                           └───────────┬────────────┘
                                                                                 │
                                                                                 ▼
                                                                     ┌────────────────────────┐
                                                                     │   GATEWAY DE PAGAMENTO │
                                                                     │   (Mercado Pago / Pix) │
                                                                     └────────────────────────┘
```

* **Frontend**: **Next.js 14+ (App Router)** com **TypeScript** e **Tailwind CSS**.
* **Ícones & Efeitos**: **Lucide React** e **Framer Motion** para transições de slides e abas fluidas.
* **Banco de Dados**: **MySQL** (conexão com as tabelas do gamemode através de um ORM leve com pool de conexões).
* **Leitura de Status SA:MP**: Protocolo UDP via biblioteca `samp-query` com cache em memória de 15 segundos para não sobrecarregar o servidor.
* **Pagamentos**: Integração Pix via **Mercado Pago** ou **Gerencianet/EFI Bank**.

---

## 5. Roadmap Sugerido de Execução

1. **Fase 1: Fundação & Identidade**
   - Configuração do projeto Next.js + Tailwind com a paleta oficial Verde & Preto;
   - Implementação da estrutura base mobile-first com Bottom Nav e Drawer.

2. **Fase 2: Landing Page Completa**
   - Construção do Hero, Cards de Servidores e One-Click Copy;
   * Carrossel de Sistemas com timer linear automático;
   * Sessão de downloads (Android / PC com requisitos);
   * Influenciadores, FAQ e Rodapé institucional.

3. **Fase 3: Integração ao Vivo do Servidor**
   - API de Query SA:MP (pega jogadores online e status direto do IP sem travar a página).

4. **Fase 4: UCP & Autenticação**
   - Tela de Login integrada ao hash de senha do SA:MP;
   * Dashboard do Jogador, Inventário e Patrimônio.

5. **Fase 5: Loja & Pagamento Automático**
   - Vitrine de produtos VIP e Moedas;
   - Geração de Pix Dinâmico e webhook de ativação instantânea.
