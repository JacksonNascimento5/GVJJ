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
$Id_Responsavel = $_POST['IdResponsavel']
$Cnpj = $_POST['Cnpj'];
$nomeFantasia = $_POST['nomeFantasia']; 
$razaoSocial = $_POST['razaoSocial']; 
$Cep = $_POST['Cep']; 
$Logradouro = $_POST['Logradouro']; 
$Complemento = $_POST['Complemento ']; 
$Numero = $_POST['Numero']; 
$UF = $_POST['UF']; 
$Email = $_POST['Email']; 
$Telefone = $_POST['Telefone']; 
$Celular = $_POST['Celular']; 
$Senha = $_POST['Senha']; 
$redesSociais = $_POST['redesSociais']; 

//Comando SQL para cadastrar os usuarios no banco
$sql = "insert into TB_USUARIOS (IdResponsavel, Nr_Cnpj, Ds_nomeFantasia, Ds_razaoSocial, Nr_Cep, Ds_Logradouro, Ds_Complemento, Nr_Nr_Numero, Ds_UF, Ds_Email, Nr_Telefone, Nr_Celular, Ds_Senha, Ds_redesSociais) values ('$IdResponsavel', '$Cnpj', '$nomeFantasia', $razaoSocial, $Cep, $Logradouro, $Complemento, $Numero, $UF, $Email, $Telefone, $Celular, $Senha, $redesSociais)"; 

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