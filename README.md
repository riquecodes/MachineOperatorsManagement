# 📋 Sistema de Gerenciamento de Operadores e Máquinas

Este é um sistema de gerenciamento de operadores e máquinas desenvolvido com **Next.js**, **React**, **TypeScript**, **Material UI** e **Zustand** para o gerenciamento de estado. Ele permite cadastrar, editar, listar e excluir operadores e máquinas de forma prática e intuitiva.

## 🛠 Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI (MUI)](https://mui.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [UUID](https://www.npmjs.com/package/uuid)

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```
git clone https://github.com/riquecodes/MachineOperatorsManagement.git
cd MachineOperatorsManagement
```

2. Instale as dependências
```
npm install
# ou
yarn
```

3. Execute a aplicação em modo de desenvolvimento
```
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em: http://localhost:3000


## 🧾 Funcionalidades

✅ Operadores
- Cadastro de operadores com matrícula única
- Validação de CPF
- Edição e exclusão com confirmação via modal
- Listagem em tabela com cabeçalho fixo e scroll automático

✅ Máquinas
- Cadastro de máquinas com código identificador único
- Edição e exclusão com confirmação via modal
- Listagem em tabela estilizada

## 🧪 Validações e UX
- Validação de campos obrigatórios (matrícula, nome, CPF)
- Prevenção de duplicidade
- Feedback visual com erros nos campos
- Desabilitação e estilização de botões conforme o estado do formulário
- Scroll e layout responsivo usando Material UI

## 📦 Scripts Disponíveis
```
npm run dev       # Executa em modo de desenvolvimento
npm run build     # Compila a aplicação para produção
npm run start     # Inicia a versão de produção
npm run lint      # Executa linter para validações
```

## 🙋‍♂️ Autor
Desenvolvido por Henrique Brum
Entre em contato: [LinkedIn]([https://www.linkedin.com/in/riqueriva/]) | [GitHub]([https://github.com/riquecodes])
