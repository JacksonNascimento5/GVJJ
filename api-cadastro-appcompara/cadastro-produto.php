<?php
include("conexao.php");

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-type, Authorization, XRequested-With');
header('Content-Type: application/json; charset=utf-8');

//Variavel que recebe os dados via Json
$_POST = json_decode(file_get_contents("php://input"),true);

//Pegando os dados do Json e guardando em VARIAVEIS
$Prestador = $_POST['Prestador'];
$Categoria = $_POST['Categoria']; 
$Nome = $_POST['Nome']; 
$Descricao = $_POST['Descricao']; 
$Preco = $_POST['Preco']; 
$Imagens = $_POST['Imagens']; 
$Altura = $_POST['Altura']; 
$Largura  = $_POST['Largura ']; 
$Comprimento = $_POST['Comprimento'];  
$material = $_POST['material']; 

//Comando SQL para cadastrar os usuarios no banco
$sql = "insert into TB_USUARIOS (Id_Prestador, Id_Categoria, Ds_Nome, Ds_Descricao, Vl_Preco, Ds_Imagens, Nr_Altura, Nr_Largura, Nr_Comprimento, Ds_material) values ('$Prestador', '$Categoria', $Nome, $Descricao, $Preco, $Imagens, $Altura, $Largura, $Comprimento, $material)"; 

//Executando o comando sql 
$resultado = mysqli_query($conexao,$sql); 

    if($resultado){ 
        $mensagem = "Cadastrado com sucesso!";  
    }else{ 
        $mensagem = "Erro ao cadastrar, tente novamente!"; 
    } 

//array response com mensagem que retorno 
$response[] =array("Mensagem: "=>$mensagem); 
echo json_encode($response); 

//Fechando a conexao 
mysqli_close($conexao);     
