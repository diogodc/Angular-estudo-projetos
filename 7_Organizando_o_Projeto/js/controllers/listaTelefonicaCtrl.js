angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [
		{nome: "Pedro", telefone: "99998888", data: new Date(), operadora: {nome: "Oi"}, cor: "blue"},
		{nome: "Ana",   telefone: "99998877", data: new Date(), operadora: {nome: "Vivo"}, cor: "yellow"},
		{nome: "Maria", telefone: "99998866", data: new Date(), operadora: {nome: "Tim"}, cor: "red"}
	];
	$scope.operadoras = [
		{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
		{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
		{nome: "Tim", codigo: 41, categoria: "Celular", preco: 2 },
		{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1 },
		{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
	];
	$scope.adicionarContato = function (contato) {
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	}; // end ContatoSelecionado
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	} // end  ordenarPor


});