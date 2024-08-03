const express = require('express');
const router = express.Router();
const assistantController = require('../controllers/assistantController');

// Маршруты для работы с ассистентами
router.get('/api/assistants/:id', assistantController.getAssistantById);
router.post('/api/assistants/create', assistantController.createAssistant);
router.put('/api/assistants/:id', assistantController.updateAssistant);

module.exports = router;
