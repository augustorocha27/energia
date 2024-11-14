import { defineConfig } from 'vite'

export default defineConfig({
  // Aqui você define o caminho base onde seu projeto vai ser hospedado
  base: '/energia-renovavel/', // Substitua <nome-do-repositorio> pelo nome do seu repositório no GitHub

  plugins: [
    // Aqui você pode adicionar plugins como o React plugin, se necessário
    // No caso do Vite com React, use o plugin @vitejs/plugin-react
    require('@vitejs/plugin-react')()
  ]
})
