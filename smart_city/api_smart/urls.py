from django.urls import path, include
from rest_framework import routers
from .views import AmbienteViewSet, SensorViewSet, HistoricoViewSet, RegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .utils import (
    importar_excel_sensor, importar_excel_ambientes, importar_excel_historico,
    exportar_excel_sensores, exportar_excel_ambientes, exportar_excel_historico
)
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
    SpectacularRedocView,
)


# ViewSets
router = routers.DefaultRouter()
router.register(r'ambientes', AmbienteViewSet)
router.register(r'sensores', SensorViewSet)
router.register(r'historicos', HistoricoViewSet)

urlpatterns = [
    # Endpoints de autenticação e registro
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Importação de dados via Excel
    path('import/sensores/', importar_excel_sensor, name='import-sensor-excel'),
    path('import/ambientes/', importar_excel_ambientes, name='import-ambientes-excel'),
    path('import/historico/', importar_excel_historico, name='import-historico-excel'),
    
# Exportação de dados em Excel
    path('export/ambientes/', exportar_excel_ambientes, name='export-ambientes-excel'),
    path('export/sensores/', exportar_excel_sensores, name='export-sensores-excel'),
    path('export/historico/', exportar_excel_historico, name='export-historico-excel'),

        # Gera o schema OpenAPI em JSON
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),

    # Interface Swagger UI
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

    # Interface alternativa: Redoc (opcional)
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),


    path('', include(router.urls))
]

