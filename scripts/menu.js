class Menu{
    static menuLateral = document.getElementsByClassName("menuLateral");
    static subMenu = document.getElementsByClassName("subMenu");
    static botoesMenuLateral = document.getElementsByClassName("menuLateral_botao");

    static abrirMenu(menu){
        if(menu == "menuLateral"){
            if(Menu.menuLateral[0].classList.contains("aberto")){
                Menu.menuLateral[0].classList.remove("aberto");
                Menu.menuLateral[0].classList.add("fechado");
            }else{
                Menu.menuLateral[0].classList.add("aberto");
                Menu.menuLateral[0].classList.remove("fechado");
            }
        }
        if(menu == "subMenu_CR10"){
            Menu.subMenu[0].classList.toggle("aberto");
            Menu.subMenu[0].classList.toggle("fechado");
        }
        if(menu == "subMenu_Servicos"){
            Menu.subMenu[1].classList.toggle("aberto");
            Menu.subMenu[1].classList.toggle("fechado");
        }
        if(menu == "subMenu_Contatos"){
            Menu.subMenu[2].classList.toggle("aberto");
            Menu.subMenu[2].classList.toggle("fechado");
        }
    }
    static navegar(aba){
        var cr10 = Menu.botoesMenuLateral[0];
        var servicos = Menu.botoesMenuLateral[1];
        if (aba == "nossaHistoria"){
            Menu.ativarAba(cr10);
        }
        if (aba == "nossaMissao"){
            Menu.ativarAba(cr10);
        }
        if (aba == "nossosValores"){
            Menu.ativarAba(cr10);
        }
        if (aba == "assistenciaTecnica"){
            Menu.ativarAba(servicos);
        }
        if (aba == "moveisPlanejados"){
            Menu.ativarAba(servicos);
        }
        if (aba == "portifolio"){
            Menu.ativarAba(servicos);
        }
    }
    static ativarAba(aba) {
        if (!aba.classList.contains("ativo")) {
            for (let i = 0; i < Menu.botoesMenuLateral.length; i++) {
                if (Menu.botoesMenuLateral[i].classList.contains("ativo")) {
                    Menu.botoesMenuLateral[i].classList.remove("ativo");
                }
            }
            aba.classList.add("ativo");
        }
    }
}