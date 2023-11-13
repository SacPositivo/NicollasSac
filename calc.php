<?php
$DB_HOST = "localhost";
$DB_USERNAME = "root";
$DB_PASSWORD = "";
$DB_NAME = "sac";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $con = new mysqli($DB_HOST, $DB_USERNAME, $DB_PASSWORD, $DB_NAME);

    if ($con->connect_error) {
        die("Falha na conexão com o banco de dados: " . $con->connect_error);
    }

    $curso = mysqli_real_escape_string($con, $_POST['curso']);
    $sede = mysqli_real_escape_string($con, $_POST['sede']);
    $parcelamento = $_POST['parcelamento'];
    $turno = isset($_POST['turno']) ? $_POST['turno'] : '';
    $desconto = floatval($_POST['desconto']);

    $query = "SELECT valor_escola, valor_material FROM valores WHERE curso = ? AND sede = ? AND turno = ?";
    
    $stmt = $con->prepare($query);
    $stmt->bind_param("sss", $curso, $sede, $turno);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        $valorEscola = floatval($row['valor_escola']);
        $valorMaterial = floatval($row['valor_material']);

        if ($parcelamento == 1) {
            $valorMaterial = $valorMaterial * 0.96;
        }

        $valorTotal = ($valorEscola + $valorMaterial) / $parcelamento;
        $valorDesconto = $valorEscola * ($desconto / 100);

        $valorTotalFormatado = number_format($valorTotal, 2, ',', '.');
        $valorComDescontoFormatado = null;

        if ($desconto !== 0) {
            $valorComDesconto = (($valorEscola - $valorDesconto) + $valorMaterial) / $parcelamento;
            $valorComDescontoFormatado = number_format($valorComDesconto, 2, ',', '.');
        }
        if ($valorDesconto > 0){
            $resultados = array(
                'valorTotalFormatado' => $valorTotalFormatado,
                'valorComDescontoFormatado' => $valorComDescontoFormatado
            );
        }else{
            $resultados = array(
                'valorTotalFormatado' => $valorTotalFormatado,
            );
        }
      

        echo json_encode($resultados);
    } else {
        echo "Curso não encontrado.";
    }

    $stmt->close();
    $con->close();
}
?>
