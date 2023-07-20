
Descrição do Site

falazeninguem é um site institucional focado em compartilhar noticias e ações politicas tanto no brasil quanto no paraná ( principalmente na região da Grande Curitiba )



=======================================================================================

Home 
*header*:

**Padrão para todas as paginas**

Cabeçalho:
 
    1.logo
   
    2.menu - Links para a a home, noticias, e sobre, 2 botões para modal(Agenda, Contato) 
    
    3.menu mobile - Links para a a home, noticias, e sobre, 2 botões para modal(Agenda, Contato)


Main:
  
    1.Slider
    2.Noticias - Destaques

Footer:

**Padrão para todas as paginas**

    1. Quem somos
    2. Contato
    3. Redes sociais

=======================================================================================

Quem somos
Main:

    1.Hero logo
    2.Grid com Visão, Valores e missão.
    3.Sobre
    4.Formulário para contato.

=======================================================================================

Notícias
Main: 

    1.Grid com todas as notícias

=======================================================================================
HOME - UPDATE

Para realizar um update neste site, siga as instruções abaixo:

1. Identifique qual parte do site você deseja atualizar. Por exemplo, se você deseja atualizar o conteúdo da seção de notícias, localize a seção `<section id="news" class="container">`.

2. Acesse o arquivo correspondente à seção que você deseja atualizar. Por exemplo, se você deseja atualizar as notícias, acesse o arquivo `news.html` dentro da pasta `components/news/`.

3. Abra o arquivo `news.html` utilizando um editor de texto.

4. Realize as alterações necessárias no conteúdo da página. Você pode modificar o texto, substituir as imagens, adicionar novos elementos HTML, entre outros. Certifique-se de seguir as tags e estrutura corretas do HTML para manter a formatação adequada.

5. Salve as alterações no arquivo `news.html`.

6. Após salvar as alterações, você pode visualizar o site atualizado acessando o arquivo `index.html` no seu navegador.

Repita o processo acima para outras partes do site que você deseja atualizar. Lembre-se de sempre salvar as alterações e verificar a visualização no navegador para confirmar se as atualizações foram aplicadas corretamente.

Nota: Certifique-se de ter um conhecimento básico de HTML e de como trabalhar com arquivos em um servidor web para realizar as atualizações com segurança.

=======================================================================================

Disposição de arquivos internos
************************** IMAGENS **************************
- Para Imagens da Index ou Globais com poucas atualizaçções 
Elas sempre devem ser salvas na Pasga assets/img
***************************************
- Imagens de conteúdo, que pode ser atualizado e removido ( notícias )
Salvar sempre em assets/news-img

************************** PÁGINAS HTML **************************
Index.html deve ser IMUTÁVEL e permanecer sempre no root
***************************************
- As páginas secundárias(about/news) sempre devem ser dispostas dentro de "components"
***ESSA REGRA DEVE SER MANTIDA PARA FUTURAS NOVAS PÁGINAS***
- As páginas de notícias devem ser criadas dentro da pasta "components/news"
- Para criar uma nova ágina de notícia deve-se fazer uma cópia do MODELO.HTML e renomear com o nome da página a ser criada, e fazer as alterações de acorco com a orientação interna da pagina.
- Basta copiar e criar campos já existentes dentro do conteúdo interno da página.
***************************************
- Para criar uma nova notítica dentro da PÁGINA de **notícias**, basta copiar o modelo abaixo e inserir abaixo do comentário "Primeira notícia/mais recente"
Modelo:
                <div class="grid-element">
                    <a href="./news/****" target="_self"> ALTERAR OS ASTERISCOS PELO NOME DA NOVA PÁGINA DE NOTÍCIAS CRIADA
                        <figure class="grid-figure">
                            <img src="../assets/news-img/*****" alt="">
                        ALTERAR OS ASTERISCOS PELO NOME DA IMAGEM RELACIONADA A NOTÍCIA, A IMAGEM DEVE ESTAR JÁ ADICIONADA A PASTA "news-img"
                        </figure>
                        <div class="news-text-div">
                            <h3 class="news-title">TITULO DA NOTÍCIA</h3>
                            <p class="news-text">
                            TEXTO DA NOTÍCIA
                            </p>
                        </div>
                    </a>
                </div> 
***************************************
- Para criar uma nova notítica dentro da PÁGINA **INICIAL**, basta copiar o modelo abaixo e inserir abaixo do comentário "Primeira notícia/mais recente"
Modelo:
                <div class="grid-element">
                    <a href="./news/****" target="_self"> ALTERAR OS ASTERISCOS PELO NOME DA NOVA PÁGINA DE NOTÍCIAS CRIADA
                        <figure class="grid-figure">
                            <img src="../assets/news-img/*****" alt="">
                        ALTERAR OS ASTERISCOS PELO NOME DA IMAGEM RELACIONADA A NOTÍCIA, A IMAGEM DEVE ESTAR JÁ ADICIONADA A PASTA "news-img"
                        </figure>
                        <div class="news-text-div">
                            <h3 class="news-title">TITULO DA NOTÍCIA</h3>
                            <p class="news-text">
                            TEXTO DA NOTÍCIA
                            </p>
                        </div>
                    </a>
                </div> 
******************************************************************
QUANDO CRIAREM AS REDES SOCIAIS ME CONTACTAR PARA PODER LINKAR.

************************** SLIDER **************************
CASO QUEIRA ALTERAR AS IMGS E TEXTO DO SLIDER, BASTA ADICIONAR PRÉVIAMENTE AS IMAGENS NA PASTA "ASSETS/IMG"

APÓS ISSO ALTERAR NA PÁGINA INDEX.HTML OS CAMPOS ESPECIFICOS AS PROPRIEDADES, JÁ ESTÃO INFORMADOS.

NOTA: DEPENDENDO DO TAMANHO DA IMAGEM, ELA PODE FICAR MUITO ESTICADA.

Dimensões da imagem do Slider
min 312x312
medium 506x506

Tamanho médio depois do Breakpoint
A altura máxima vai ser de 640px
Tamanho máximo 1106x640

=======================================================================================

QUALQUER DÚVIDA hagar.telles@gmail.com

