// Função para inicializar a tradução dinâmica
function enableDynamicTranslation() {
    const translationMap = {
        "Módulo 1: Iniciante": "Module 1: Beginner",
        "Fundamentos do Inglês e vocabulário básico para iniciantes.": "English and basic vocabulary for beginners.",
        "Módulo 2: Intermediário": "Module 2: Intermediate",
        "Módulo 3: Avançado": "Module 3: Advanced",
        "Módulo Extra: Preparação para Exames": "Extra Module: Exam Preparation",
        "Fundamentos do Inglês": "English Fundamentals",
        "Vocabulário Básico": "Basic Vocabulary",
        "Estruturas Gramaticais Simples": "Simple Grammatical Structures",
        "Compreensão Auditiva e Leitura": "Auditory and Reading comprehension",
        "Exercícios de escuta com diálogos simples.": "Listen to simple dialogues.",
        // Adicione mais traduções conforme necessário
    };

    // Seleciona todos os elementos que têm texto a ser traduzido
    const elementsToTranslate = document.querySelectorAll('h2, a, li, p');

    elementsToTranslate.forEach(element => {
        const originalText = element.textContent.trim();

        // Se a palavra estiver no mapa de traduções
        if (translationMap[originalText]) {
            const translatedText = translationMap[originalText];

            // Ao passar o mouse por cima, mostra a tradução
            element.addEventListener('mouseenter', () => {
                element.textContent = translatedText;
            });

            // Ao tirar o mouse de cima, retorna ao texto original
            element.addEventListener('mouseleave', () => {
                element.textContent = originalText;
            });
        }
    });
}

// Executa a função após carregar a página
document.addEventListener("DOMContentLoaded", enableDynamicTranslation);
