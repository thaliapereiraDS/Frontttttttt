import pandas as pd
from .models import Sensor, Ambiente, Historico
from django.http import HttpResponse


def importar_excel_sensor(req):
    arquivo_excel = req.FILES.get('file')
    
    if not arquivo_excel: 
        return HttpResponse("No file uploaded.", status=400)
    
    registros_importados = 0

    try:
        df = pd.read_excel(arquivo_excel)
    except Exception as e:
        return HttpResponse(f"Erro ao ler o arquivo: {e}", status=400)

    for _, row in df.iterrows():
        try:
            Sensor.objects.create(
                sensor=row['sensor'],
                mac_address=row['mac_address'],
                unidade_med=row['unidade_medida'],
                latitude=row['latitude'],
                longitude=row['longitude'],
                status=row['status'],
            )
            registros_importados += 1
        except Exception as e:
            print(f"[ERRO] Erro ao importar sensor: {e}")

    print(f"[INFO] {registros_importados} sensores importados.")
    return HttpResponse(f"{registros_importados} sensores importados com sucesso.")


def importar_excel_ambientes(req):
    arquivo_excel = req.FILES.get('file')

    if not arquivo_excel: 
        return HttpResponse("No file uploaded.", status=400)
    
    registros_importados = 0

    try:
        df = pd.read_excel(arquivo_excel)
    except Exception as e:
        return HttpResponse(f"Erro ao ler o arquivo: {e}", status=400)

    for _, row in df.iterrows():
        try:
            Ambiente.objects.create(
                sig=row['sig'],
                descricao=row['descricao'],
                ni=row['ni'],
                responsavel=row['responsavel']
            )
            registros_importados += 1
        except Exception as e:
            print(f"[ERRO] Erro ao importar ambiente: {e}")

    print(f"[INFO] {registros_importados} ambientes importados.")
    return HttpResponse(f"{registros_importados} ambientes importados com sucesso.")


def importar_excel_historico(req):
    arquivo_excel = req.FILES.get('file')
    
    if not arquivo_excel: 
        return HttpResponse("No file uploaded.", status=400)
    
    registros_importados = 0

    try:
        df = pd.read_excel(arquivo_excel)
    except Exception as e:
        return HttpResponse(f"Erro ao ler o arquivo: {e}", status=400)

    for _, row in df.iterrows():
        try:
            ambiente = Ambiente.objects.get(sig=int(row['ambiente'])+20400000)
            sensor = Sensor.objects.get(id=row['sensor'])
            Historico.objects.create(
                sensor=sensor,
                valor=row['valor'],
                timestamp=pd.to_datetime(row['timestamp']),
                ambiente=ambiente,
            )
            registros_importados += 1
        except Exception as e:
            print(f"[ERRO] Erro ao importar histórico: {e}")

    print(f"[INFO] {registros_importados} históricos importados.")
    return HttpResponse(f"{registros_importados} históricos importados com sucesso.")



def exportar_excel_sensores(req):
    if not req.user.is_authenticated:
        return HttpResponse(status=401)

    sensores = Sensor.objects.all().values(
        'id', 'sensor', 'mac_address', 'unidade_med', 'latitude', 'longitude', 'status'
    )
    df = pd.DataFrame(sensores)
    
    response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    response['Content-Disposition'] = 'attachment; filename=sensores.xlsx'
    df.to_excel(response, index=False)
    return response


def exportar_excel_ambientes(req):
    if not req.user.is_authenticated:
        return HttpResponse(status=401)

    ambientes = Ambiente.objects.all().values(
        'id', 'sig', 'descricao', 'ni', 'responsavel'
    )
    df = pd.DataFrame(ambientes)

    response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    response['Content-Disposition'] = 'attachment; filename=ambientes.xlsx'
    df.to_excel(response, index=False)
    return response


def exportar_excel_historico(req):
    if not req.user.is_authenticated:
        return HttpResponse(status=401)

    historico = Historico.objects.select_related('sensor', 'ambiente').all()
    
    dados = []
    for h in historico:
        dados.append({
            'id': h.id,
            'sensor_id': h.sensor.id,
            'sensor_nome': str(h.sensor),
            'valor': h.valor,
            'timestamp': h.timestamp,
            'ambiente_id': h.ambiente.id,
            'ambiente_sig': h.ambiente.sig
        })
    
    df = pd.DataFrame(dados)
    
    response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    response['Content-Disposition'] = 'attachment; filename=historico.xlsx'
    df.to_excel(response, index=False)
    return response