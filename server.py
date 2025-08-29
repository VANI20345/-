from fastapi import FastAPI, UploadFile, File
from tensorflow import keras
from PIL import Image
import numpy as np
import io

app = FastAPI()

# تحميل الموديل كطبقة TFSMLayer
model_layer = keras.layers.TFSMLayer("dates_model_saved", call_endpoint="serving_default")
# اصنع موديل Keras كامل حوله (حتى يقدر يتوقع)
model = keras.Sequential([model_layer])

labels = ["Galaxy","Meneifi","Shaishe","Rutab","Sokari","Medjool","Nabtat Ali","Sugaey","Ajwa"]

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image_bytes = await file.read()
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    img = img.resize((224,224))
    arr = np.array(img)/255.0
    arr = np.expand_dims(arr, axis=0)  # batch dimension
    preds = model.predict(arr)
    index = np.argmax(preds[0])
    return {"label": labels[index], "confidence": float(preds[0][index])}
