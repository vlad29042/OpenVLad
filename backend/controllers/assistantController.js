const Assistant = require('../models/Assistant');

// Получение ассистента по ID
exports.getAssistantById = async (req, res) => {
  try {
    const assistant = await Assistant.findByPk(req.params.id);
    if (!assistant) {
      return res.status(404).json({ message: 'Assistant not found' });
    }
    res.json(assistant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Создание нового ассистента
exports.createAssistant = async (req, res) => {
  try {
    const { name, instructions, model, fileUrl, temperature, topP, maxLength } = req.body;
    const assistant = await Assistant.create({
      name,
      instructions,
      model,
      fileUrl,
      temperature,
      topP,
      maxLength
    });
    res.status(201).json(assistant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Обновление ассистента
exports.updateAssistant = async (req, res) => {
  try {
    const assistant = await Assistant.findByPk(req.params.id);
    if (!assistant) {
      return res.status(404).json({ message: 'Assistant not found' });
    }
    const { name, instructions, model, fileUrl, temperature, topP, maxLength } = req.body;
    assistant.name = name;
    assistant.instructions = instructions;
    assistant.model = model;
    assistant.fileUrl = fileUrl;
    assistant.temperature = temperature;
    assistant.topP = topP;
    assistant.maxLength = maxLength;
    await assistant.save();
    res.json(assistant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
